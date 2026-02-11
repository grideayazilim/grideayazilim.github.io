import { useState, useCallback, useEffect } from 'react';
import alasql from 'alasql';
import { initialDatabase } from '../data/mockDb';

export const useSqlEngine = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [tableData, setTableData] = useState([]);

    // Initialize Database
    useEffect(() => {
        alasql('CREATE TABLE IF NOT EXISTS malzemeler');
        // Always reset data to initial state on mount to avoid stale states
        const initialData = JSON.parse(JSON.stringify(initialDatabase.malzemeler));
        alasql.tables.malzemeler.data = initialData;
        setTableData(initialData);
    }, []);

    const executeSql = useCallback((query) => {
        setError(null);
        try {
            const sanitizedQuery = query.trim();

            if (!sanitizedQuery) {
                setResult([]);
                setSelectedIds([]);
                setSelectedColumns([]);
                return;
            }

            if (sanitizedQuery === 'init') {
                alasql('DROP TABLE IF EXISTS malzemeler');
                alasql('CREATE TABLE malzemeler');
                const initialData = JSON.parse(JSON.stringify(initialDatabase.malzemeler));
                alasql.tables.malzemeler.data = initialData;
                setTableData(initialData);
                setResult([]);
                setError(null);
                setSelectedIds([]);
                setSelectedColumns([]);
                return;
            }

            // --- Custom Case Sensitivity Check for COLUMNS ---
            // Alasql matches columns case-insensitively by default if not quoted. 
            // We want to ENFORCE strict casing for our specific schema keys: Ad, Kategori, Miktar, STT, fiyat.
            // But we allow SQL keywords (SELECT, FROM) to be any case.

            const validColumns = ['Ad', 'Kategori', 'Miktar', 'STT', 'fiyat', 'id', 'raf_no', 'gorsel'];

            // Simple regex to find words that look like our columns but have wrong casing
            // This is a basic heuristic. For a full parser we'd need more, but this covers the user's "Engine" requirement.
            const tokens = sanitizedQuery.split(/[\s,()=<>!]+/); // Split by common SQL delimiters

            for (const token of tokens) {
                const cleanToken = token.replace(/['";]/g, ''); // Remove quotes/semicolons
                // Check if this token is a case-variant of a valid column BUT not the valid column itself
                const lowerToken = cleanToken.toLowerCase();
                const matchedCol = validColumns.find(c => c.toLowerCase() === lowerToken);

                if (matchedCol && cleanToken !== matchedCol) {
                    // Check if it's reserved word or special (optional, alasql handles reserved words)
                    // But if user wrote 'ad' instead of 'Ad', we throw error.
                    // Exception: 'id' and 'fiyat' are lowercase in our schema, so they are fine if typed lowercase.
                    // The issue is mostly Ad, Kategori, Miktar.
                    throw new Error(`Sütun ismi hatalı: '${cleanToken}'. Doğrusu: '${matchedCol}' olmalı.`);
                }
            }

            // --- Inject ID for Visualization ---
            // We need 'id' to know WHICH items to highlight on the shelf.
            // If user queries 'SELECT Ad FROM ...', we get no ID, so we can't highlight items.
            // We secretly add 'id' to the query if it's a SELECT query and ID is missing.

            let finalQuery = sanitizedQuery;
            const selectMatch = finalQuery.match(/^\s*SELECT\s+(.+?)\s+FROM/i);

            if (selectMatch) {
                const columnsPart = selectMatch[1];
                // Check if * or id is already there
                const hasStar = /\*/.test(columnsPart);
                const hasId = /\bid\b/i.test(columnsPart);

                if (!hasStar && !hasId) {
                    // Inject id. 
                    // Be careful with FROM position.
                    // Regex replacement: replace strict first occurrence to avoid messing up subqueries (simple logic)
                    finalQuery = finalQuery.replace(columnsPart, `${columnsPart}, id`);
                }
            }

            // Execute query
            const res = alasql(finalQuery);

            // Refresh table data view (for UPDATE/DELETE effects)
            const currentTableData = alasql('SELECT * FROM malzemeler');
            setTableData(currentTableData);

            // Handle array result (SELECT)
            if (Array.isArray(res)) {
                setResult(res);

                // Extract IDs
                let ids = res.map(row => row.id).filter(id => id !== undefined);

                // Handling Aggregates (MIN, MAX) where ID is missing but we want to highlight the source item
                if (ids.length === 0 && res.length > 0) {
                    const row = res[0];
                    const keys = Object.keys(row);
                    // Check for Aggregate keys like "MIN(Miktar)", "MAX(Miktar)"
                    const aggKey = keys.find(k => k.startsWith('MIN(') || k.startsWith('MAX('));

                    if (aggKey) {
                        const val = row[aggKey];
                        // Extract the column name inside parenthesis e.g. Miktar
                        const colMatch = aggKey.match(/\((.+?)\)/);
                        if (colMatch) {
                            const colName = colMatch[1];
                            // Find the items that have this value
                            // Note: using tableData usually works if it's fresh, but let's query alasql directly
                            // CAREFUL: string values need quotes? Usually numbers for Min/Max.
                            const shadowRes = alasql(`SELECT id FROM malzemeler WHERE ${colName} = ?`, [val]);
                            if (shadowRes.length > 0) {
                                ids = shadowRes.map(r => r.id);
                            }
                        }
                    }
                }

                setSelectedIds(ids);

                // Extract selected columns
                if (res.length > 0) {
                    let keys = Object.keys(res[0]);

                    // Filter out 'id' from selectedColumns unless the USER explicitly asked for it.
                    // Logic: If original query didn't have 'id' (and didn't have *), remove 'id' from keys.
                    // This ensures 'id' field doesn't glow if user just asked for 'Ad'.
                    // Note: If user used *, 'id' is in keys. We keep it? User said "Tüm columnlar parlasın". Yes.
                    // If user said 'SELECT Ad', we injected 'id'. 'id' is in keys. We MUST remove it.

                    const originalColumnsPart = selectMatch ? selectMatch[1] : '';
                    const originalHasId = /\bid\b/i.test(originalColumnsPart);
                    const originalHasStar = /\*/.test(originalColumnsPart);

                    if (!originalHasId && !originalHasStar) {
                        keys = keys.filter(k => k.toLowerCase() !== 'id');
                    }

                    // If it was an Aggregate, map the key back to the column name for highlighting?
                    // e.g. "MIN(Miktar)" -> Highlight "Miktar"?
                    // Yes, user asked "vanilya itemi ve miktar columunu parlasın"
                    keys = keys.map(k => {
                        const aggMatch = k.match(/(?:MIN|MAX)\((.+?)\)/);
                        return aggMatch ? aggMatch[1] : k;
                    });

                    setSelectedColumns(keys);
                } else {
                    setSelectedColumns([]);
                }
            } else {
                // Non-SELECT queries (UPDATE, DELETE, INSERT)
                // We want to highlight the items affected by UPDATE
                if (sanitizedQuery.toUpperCase().startsWith('UPDATE')) {
                    // Extract WHERE clause to find matching items
                    const whereMatch = sanitizedQuery.match(/WHERE\s+(.+)$/i);
                    if (whereMatch) {
                        const whereClause = whereMatch[1];
                        // Run a shadow SELECT to find IDs matching the update condition
                        // Note: We should do this AFTER update? Yes, to show current state, but IDs don't change.
                        try {
                            const shadowRes = alasql(`SELECT id FROM malzemeler WHERE ${whereClause}`);
                            const ids = shadowRes.map(r => r.id);
                            setSelectedIds(ids);
                            // User said "beyaz un itemi ve tüm özellikleri parlasın"
                            // So we act like 'SELECT *' was selected -> all columns
                            setSelectedColumns(['Ad', 'Miktar', 'Kategori', 'STT', 'gorsel', 'id']);
                        } catch (e) {
                            console.warn("Could not trace IDs for UPDATE", e);
                            setSelectedIds([]);
                            setSelectedColumns([]);
                        }
                    }
                } else {
                    setResult([]);
                    setSelectedIds([]);
                    setSelectedColumns([]);
                }
            }

        } catch (err) {
            console.error("SQL Error:", err);
            // Pass the clean message to UI
            setError(err.message || 'Hatalı komut.');
            setResult([]);
            setSelectedIds([]);
            setSelectedColumns([]);
        }
    }, []);

    const resetEngine = useCallback(() => {
        setResult([]);
        setError(null);
        setSelectedIds([]);
        setSelectedColumns([]);
        // Optional: Reset table data if level requires it? 
        // For now, just keeping current state unless we want full reset.
    }, []);

    return { executeSql, resetEngine, result, error, selectedIds, selectedColumns, tableData };
};

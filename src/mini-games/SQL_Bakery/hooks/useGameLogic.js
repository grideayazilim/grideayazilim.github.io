import { useState, useEffect } from 'react';
import alasql from 'alasql';
import levels from '../data/levels.json';

export const useGameLogic = (executeSql, currentResultIds, currentResult, currentSelectedColumns) => {
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [levelSuccess, setLevelSuccess] = useState(false);

    const currentLevel = levels[currentLevelIndex];
    const isLastLevel = currentLevelIndex === levels.length - 1;

    useEffect(() => {
        setLevelSuccess(false);
    }, [currentLevelIndex]);

    const validateLevel = () => {
        if (!currentLevel) return;

        try {
            // For UPDATE/DELETE/BOSS levels (ID >= 16)
            // Note: User changed Level IDs. Update logic for new IDs if needed.
            // Levels with updates are: 16 (Update).
            // But let's check generic logic or ID-based.
            // Current list sends ID 16 for update.

            // We'll use a specific check for UPDATE instructions if ID logic is fragile.
            // But user seems to keep IDs somewhat consistent.
            // Let's assume Update is only Level 16 for now based on new list.

            // Wait, Level 14 is MIN, 15 is MAX. 16 is UPDATE.
            // Before it was > 22. Adapt logic!

            if (currentLevel.id >= 16) {
                // Only Level 16 is Update in the new list.
                if (currentLevel.id === 16) { // Update Beayz Un
                    // Check DB state
                    const res = alasql("SELECT Miktar FROM malzemeler WHERE Ad='Beyaz Un'");
                    if (res.length > 0 && res[0].Miktar === 100) {
                        setLevelSuccess(true);
                        return;
                    }
                }

                setLevelSuccess(false);
                return;
            }

            // For SELECT levels
            if (!currentResult) {
                setLevelSuccess(false);
                return;
            }

            // 1. Run Expected Query to get "Target Data"
            const expectedRes = alasql(currentLevel.expectedQuery);

            // 2. Normalize Current Result (Remove injected 'id' if not requested)
            // If expectedRes rows don't have 'id', we should strip 'id' from currentResult rows before comparing.
            let normalizedCurrentResult = currentResult;

            if (expectedRes.length > 0 && currentResult.length > 0) {
                const expectedKeys = Object.keys(expectedRes[0]);
                const currentKeys = Object.keys(currentResult[0]);

                // If 'id' is in current (injected) but not in expected (strict select), filter it out.
                if (!expectedKeys.includes('id') && currentKeys.includes('id')) {
                    normalizedCurrentResult = currentResult.map(row => {
                        const newRow = { ...row };
                        delete newRow.id;
                        return newRow;
                    });
                }
            }

            // 3. Compare Results
            const expectedJson = JSON.stringify(expectedRes);
            const currentJson = JSON.stringify(normalizedCurrentResult);

            // Compare stringified results (Deep equality)
            const isMatch = expectedJson === currentJson;

            if (isMatch) {
                setLevelSuccess(true);
            } else {
                setLevelSuccess(false);
            }

        } catch (err) {
            console.error("Validation Error:", err);
            setLevelSuccess(false);
        }
    };

    const nextLevel = () => {
        if (!isLastLevel) {
            setCurrentLevelIndex(prev => prev + 1);
            // RESET DATABASE for next level to ensure clean state
            alasql('DROP TABLE IF EXISTS malzemeler');
            executeSql("init");
        }
    };

    return {
        currentLevel,
        currentLevelIndex,
        levelSuccess,
        validateLevel,
        nextLevel,
        isLastLevel
    };
};

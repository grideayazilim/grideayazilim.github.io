import React, { useState } from 'react';

const SqlEditor = ({ onRun, initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');

    const handleRun = () => {
        onRun(query);
    };

    const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            handleRun();
        }
    };

    // Update local query if prop changes (e.g. level switch)
    React.useEffect(() => {
        setQuery(initialQuery || '');
    }, [initialQuery]);

    return (
        <div className="editor-panel">
            <div className="editor-header">
                <span>SQL Editör</span>
                <button onClick={handleRun} className="run-btn">
                    ÇALIŞTIR ▶
                </button>
            </div>
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Sorgunuzu buraya yazın..."
                spellCheck="false"
            />
            <div className="editor-footer">
                <small>Çalıştırmak için CTRL + Enter</small>
            </div>
        </div>
    );
};

export default SqlEditor;

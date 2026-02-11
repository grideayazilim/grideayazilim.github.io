import React, { useState, useEffect } from 'react';
import BakeryShelf from '../BakeryShelf';
import SqlEditor from '../Editor/SqlEditor';
import LevelInfo from '../LevelInfo/LevelInfo';
import { useSqlEngine } from '../../hooks/useSqlEngine';
import { useGameLogic } from '../../hooks/useGameLogic';
import levels from '../../data/levels.json';
import './Game.scss';

function Game() {
    const { executeSql, result, error, selectedIds, selectedColumns, tableData } = useSqlEngine();
    const {
        currentLevel,
        currentLevelIndex,
        levelSuccess,
        validateLevel,
        nextLevel
    } = useGameLogic(executeSql, selectedIds, result, selectedColumns);

    const [shake, setShake] = useState(false);
    const [hasAttempted, setHasAttempted] = useState(false);

    // Trigger shake on SQL error
    useEffect(() => {
        if (error) {
            setShake(true);
            const timer = setTimeout(() => setShake(false), 500);
            return () => clearTimeout(timer);
        }
    }, [error]);

    // Reset attempt state when level changes
    useEffect(() => {
        setHasAttempted(false);
        setShake(false);
    }, [currentLevelIndex]);

    // Handle Run
    const handleRun = (query) => {
        executeSql(query);
        setHasAttempted(true);
    };

    // Check success when selectedIds change
    useEffect(() => {
        validateLevel();
    }, [selectedIds, result, selectedColumns, validateLevel]);

    return (
        <div className={`app-container ${shake ? 'shake-error' : ''}`} style={{ height: '100%' }}>
            <div className="game-layout">
                <aside className="sidebar">
                    <LevelInfo
                        level={currentLevel}
                        currentLevelIndex={currentLevelIndex}
                        totalLevels={levels.length}
                    />
                    <SqlEditor
                        onRun={handleRun}
                        initialQuery=""
                    />

                    {/* Chef Area: Shows only upon Error OR Incorrect Attempt */}
                    <div className="chef-area">
                        {(error || (hasAttempted && !levelSuccess)) && (
                            <div className="chef-container">
                                <div className="speech-bubble-container">
                                    <img src={new URL('../../assets/speech_bubble.png', import.meta.url).href} className="bubble-bg" alt="Hint" />
                                    <div className="bubble-text">
                                        {currentLevel ? currentLevel.hint : "..."}
                                    </div>
                                </div>
                                <img src={new URL('../../assets/chef.png', import.meta.url).href} className="chef-avatar" alt="Chef" />
                            </div>
                        )}
                    </div>
                </aside>

                <main className="main-content">
                    <BakeryShelf
                        ingredients={tableData}
                        selectedIds={selectedIds}
                        selectedColumns={selectedColumns}
                        currentLevelId={currentLevel.id}
                    />

                    {levelSuccess && (
                        <div className="next-level-area">
                            <div className="success-message">🎉 Harika İş! 🎉</div>
                            <button onClick={nextLevel} className="next-level-btn">
                                Sonraki Seviye ➡
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Game;

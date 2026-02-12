import React from 'react';

const LevelInfo = ({ level, currentLevelIndex, totalLevels }) => {
    return (
        <div className="level-info-panel">
            <div className="level-header">
                <h2>{level.title}</h2>
                <span className="level-counter">
                    Level {currentLevelIndex + 1} / {totalLevels}
                </span>
            </div>
            <p className="instruction">{level.instruction}</p>
            <div className="task-box">
                <strong>Görev:</strong> {level.task}
            </div>

        </div>
    );
};

export default LevelInfo;

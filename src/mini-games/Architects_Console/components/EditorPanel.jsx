import React from "react";
import styles from "./EditorPanel.module.scss";

const EditorPanel = ({
  levels,
  levelIndex,
  setLevelIndex,
  currentLevel,
  userCode,
  setUserCode,
  onStart,
  onReset,
  showHint,
  setShowHint,
}) => {
  return (
    <div className={styles.editorArea}>
      <div className={styles.header}>
        <h3 style={{ color: "gold" }}>LEVEL {currentLevel.id}</h3>
        <select
          value={levelIndex}
          onChange={(e) => setLevelIndex(Number(e.target.value))}
        >
          {levels.map((lvl, index) => (
            <option key={lvl.id} value={index}>
              {lvl.title}
            </option>
          ))}
        </select>
      </div>

      <p style={{ marginTop: 10, color: "#aaa" }}>{currentLevel.description}</p>

      <textarea
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        className={styles.codeArea}
        spellCheck="false"
      />

      <div className={styles.controls}>
        <button onClick={onStart}>BAŞLAT</button>
        <button onClick={onReset}>SIFIRLA</button>
      </div>

      <button className={styles.hintBtn} onClick={() => setShowHint(!showHint)}>
        {showHint ? "İpucunu Gizle" : "💡 İPUCU GÖSTER"}
      </button>
    </div>
  );
};

export default EditorPanel;

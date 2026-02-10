import React from "react";
import styles from "./GameField.module.scss";

const GameField = ({
  currentLevel,
  levelIndex,
  userCode,
  bitRef,
  startRef,
  endRef,
  setObjectRef,
}) => {
  const childrenByParent = React.useMemo(() => {
    const map = {};
    currentLevel.objects.forEach((obj, index) => {
      if (obj.parentId) {
        if (!map[obj.parentId]) map[obj.parentId] = [];
        map[obj.parentId].push({ ...obj, originalIndex: index });
      }
    });
    return map;
  }, [currentLevel.objects]);

  const parentObjects = React.useMemo(() => {
    return currentLevel.objects
      .map((obj, index) => ({ ...obj, originalIndex: index }))
      .filter((obj) => !obj.parentId);
  }, [currentLevel.objects]);

  const renderObject = (obj) => {
    const index = obj.originalIndex;
    const children = childrenByParent[obj.id] || [];
    const uniqueKey = `level-${levelIndex}-obj-${index}`;
    const isFlexContainer = obj.type === "flexZone";

    return (
      <div
        key={uniqueKey}
        ref={(el) => setObjectRef(index, el)}
        className={`${styles[obj.type]} ${obj.className || ""}`}
        style={{
          left: obj.x !== undefined ? obj.x : undefined,
          top: obj.y !== undefined ? obj.y : undefined,
          width: obj.width,
          height: obj.height,
        }}
      >
        {obj.type === "flag" && "🚩"}

        {children.map((child) => (
          <div
            key={`level-${levelIndex}-child-${child.originalIndex}`}
            ref={(el) => setObjectRef(child.originalIndex, el)}
            className={`${styles[child.type]} ${child.className || ""}`}
            style={{
              left: isFlexContainer ? undefined : child.x,
              top: isFlexContainer ? undefined : child.y,
              width: child.width,
              height: child.height,
            }}
          >
            {child.type === "flag" && "🚩"}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div key={`gameArea-${levelIndex}`} className={styles.gameArea}>
      <style>{userCode}</style>

      {/* ROBOT */}
      <div
        ref={bitRef}
        className={styles.bit}
        style={{ top: "460px", left: `${currentLevel.startPlat.x + 20}px` }}
      >
        🤖
      </div>

      {/* BAŞLANGIÇ PLATFORMU */}
      <div
        ref={startRef}
        className={styles.platform}
        style={{
          top: "500px",
          left: `${currentLevel.startPlat.x}px`,
          width: `${currentLevel.startPlat.w}px`,
        }}
      ></div>
      {parentObjects.map((obj) => renderObject(obj))}

      {/* BİTİŞ PLATFORMU */}
      <div
        ref={endRef}
        className={styles.platform}
        style={{
          top: "500px",
          left: `${currentLevel.endPlat.x}px`,
          width: `${currentLevel.endPlat.w}px`,
        }}
      ></div>
    </div>
  );
};

export default GameField;

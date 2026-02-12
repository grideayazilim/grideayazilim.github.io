import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ArchitectsConsole.module.scss";
import { levels } from "./levels";

import GameField from "./components/GameField";
import EditorPanel from "./components/EditorPanel";
import Overlays from "./components/Overlays";

const ArchitectsConsole = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [deathMessage, setDeathMessage] = useState("ROBOT ÖLDÜ!");

  const currentLevel = levels[levelIndex];
  const [userCode, setUserCode] = useState(currentLevel.cssTask);

  const bitRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const objectRefs = useRef([]);
  const gameLoopRef = useRef(null);
  const bitPos = useRef({ x: 20, y: 0 });

  const isGameOverRef = useRef(false);
  const isLevelCompleteRef = useRef(false);

  useEffect(() => {
    setUserCode(currentLevel.cssTask);
    setShowHint(false);

    objectRefs.current = [];

    resetGame();
  }, [levelIndex]);

  // FİZİK MOTORU
  const checkCollision = (rect1, rect2) => {
    return (
      rect1.bottom >= rect2.top &&
      rect1.bottom <= rect2.top + 30 &&
      rect1.right > rect2.left &&
      rect1.left < rect2.right
    );
  };

  const checkDeadlyCollision = (rect1, rect2) => {
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };

  // OYUN DÖNGÜSÜ
  const updateGame = useCallback(() => {
    if (!bitRef.current || !startRef.current) return;
    if (isGameOverRef.current || isLevelCompleteRef.current) return;

    // LEVEL 10 HİLE KORUMASI
    if (currentLevel.id === 10) {
      const coreIndex = currentLevel.objects.findIndex(
        (o) => o.className === "core",
      );
      if (coreIndex !== -1) {
        const coreEl = objectRefs.current[coreIndex];
        if (!coreEl || window.getComputedStyle(coreEl).display === "none") {
          handleGameOver("cheat");
          return;
        }
      }
    }

    const bitRect = bitRef.current.getBoundingClientRect();
    const safeZones = [
      startRef.current.getBoundingClientRect(),
      endRef.current.getBoundingClientRect(),
    ];

    let hitDeadly = false;
    let hitFlag = false;
    let deadlyReason = "";

    currentLevel.objects.forEach((obj, index) => {
      const el = objectRefs.current[index];
      if (!el) return;

      const style = window.getComputedStyle(el);
      if (style.display === "none" || Number(style.opacity) < 0.1) return;

      // Level 9 & 10 Özel Kontrolleri
      if (
        (obj.className && obj.className.includes("hyper-")) ||
        obj.className === "core"
      ) {
        const bgColor = style.backgroundColor.replace(/\s/g, "");
        const isGreen = bgColor.includes("46,204,113") || bgColor === "#2ecc71";
        const animName = style.animationName;
        const isUnstable = animName && animName !== "none";

        if (checkCollision(bitRect, el.getBoundingClientRect())) {
          if (!isGreen) {
            hitDeadly = true;
            deadlyReason = obj.className.includes("core") ? "core" : "heat";
            return;
          }
          if (isUnstable) {
            hitDeadly = true;
            deadlyReason = "shake";
            return;
          }
          if (obj.className === "core") {
            const zIdx = parseInt(style.zIndex || "0");
            if (zIdx >= 60) {
              hitDeadly = true;
              deadlyReason = "core";
              return;
            }
          }
        }
      }
      // LEVEL 15 BOSS KONTROLÜ: ORDER & GAP
    if (currentLevel.id === 15) {
      if (bitPos.current.x > 920) {
        
        const d1 = document.querySelector('[class*="bridge-d1"]');
        const d2 = document.querySelector('[class*="bridge-d2"]');
        const d3 = document.querySelector('[class*="bridge-d3"]');
        const zoneD = document.querySelector('[class*="flex-boss-d"]');

        if (d1 && d2 && d3 && zoneD) {
          const style1 = window.getComputedStyle(d1);
          const style2 = window.getComputedStyle(d2);
          const style3 = window.getComputedStyle(d3);
          const zoneStyle = window.getComputedStyle(zoneD);

          const o1 = style1.order;
          const o2 = style2.order;
          const o3 = style3.order;

          if (o1 !== "1" || o2 !== "2" || o3 !== "3") {
             handleGameOver("shake");
             return;
          }
        }
      }
    }

      // index Kontrolü
      if (
        obj.className &&
        (obj.className.includes("hidden-plat") ||
          obj.className.includes("hidden-flag"))
      ) {
        const zIndex = parseInt(style.zIndex || "0");
        if (zIndex < 50) return;
      }

      const objRect = el.getBoundingClientRect();
      if (obj.scenery) return;

      // FlexZone için kontrol
      if (obj.type === "flexZone") return;

      if (objRect.width > 0 && objRect.height > 0) {
        if (obj.type === "flag") {
          if (checkDeadlyCollision(bitRect, objRect)) hitFlag = true;
        } else if (obj.safe) {
          safeZones.push(objRect);
        } else {
          if (checkDeadlyCollision(bitRect, objRect)) {
            hitDeadly = true;
            deadlyReason = obj.type;
          }
        }
      }
    });

    if (hitDeadly) {
      handleGameOver(deadlyReason);
      return;
    }

    if (hitFlag) {
      handleWin();
      return;
    }

    let isOnGround = false;
    for (let zone of safeZones) {
      if (checkCollision(bitRect, zone)) {
        isOnGround = true;
        break;
      }
    }

    if (!isOnGround) bitPos.current.y += 5;
    bitPos.current.x += 2;

    if (bitPos.current.y > 600) {
      handleGameOver("fall");
      return;
    }

    bitRef.current.style.transform = `translate(${bitPos.current.x}px, ${bitPos.current.y}px)`;
    gameLoopRef.current = requestAnimationFrame(updateGame);
  }, [currentLevel]);

  const handleWin = useCallback(() => {
    setIsPlaying(false);
    isLevelCompleteRef.current = true;
    cancelAnimationFrame(gameLoopRef.current);
    setIsLevelComplete(true);
  }, []);

  const handleGameOver = useCallback((reason) => {
    setIsPlaying(false);
    isGameOverRef.current = true;
    cancelAnimationFrame(gameLoopRef.current);
    setIsGameOver(true);

    const messages = {
      wall: "DUVARA TOSLADIN! 🧱💥",
      spike: "DİKENE BATTIN! 🌵💀",
      water: "SUYA DÜŞTÜN! 🌊🫧",
      fall: "BOŞLUĞA UÇTUN! ☁️😱",
      heat: "AŞIRI ISINMA! ROBOT ERİDİ! 🔥🤖",
      shake: "YAPISAL HATA! ROBOT SARSINTIDAN PARÇALANDI! 📉🏗️",
      cheat: "HİLE YAPMA! ÇEKİRDEK KAYBOLUNCA PATLADI! 💥☢️",
      core: "RADYASYON SIZINTISI! ROBOT ERİDİ! ☢️💀",
    };
    setDeathMessage(messages[reason] || "ROBOT HATA VERDİ! 💀");
  }, []);

  const resetGame = useCallback(() => {
    setIsPlaying(false);
    setIsLevelComplete(false);
    setIsGameOver(false);
    setIsGameFinished(false);
    isGameOverRef.current = false;
    isLevelCompleteRef.current = false;
    cancelAnimationFrame(gameLoopRef.current);
    bitPos.current = { x: 20, y: 0 };
    if (bitRef.current) bitRef.current.style.transform = `translate(20px, 0px)`;
  }, []);

  const startGame = useCallback(() => {
    if (isGameOverRef.current || isLevelCompleteRef.current) resetGame();
    setIsPlaying(true);
    gameLoopRef.current = requestAnimationFrame(updateGame);
  }, [resetGame, updateGame]);

  const handleReplay = useCallback(() => {
    setUserCode(currentLevel.cssTask);
    resetGame();
  }, [currentLevel.cssTask, resetGame]);

  const nextLevel = useCallback(() => {
    if (levelIndex < levels.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else {
      setIsLevelComplete(false);
      isLevelCompleteRef.current = false;
      setIsGameFinished(true);
    }
  }, [levelIndex]);

  return (
    <div className={styles.container}>
      <GameField
        currentLevel={currentLevel}
        levelIndex={levelIndex}
        userCode={userCode}
        bitRef={bitRef}
        startRef={startRef}
        endRef={endRef}
        setObjectRef={(index, el) => (objectRefs.current[index] = el)}
      />

      <EditorPanel
        levels={levels}
        levelIndex={levelIndex}
        setLevelIndex={setLevelIndex}
        currentLevel={currentLevel}
        userCode={userCode}
        setUserCode={setUserCode}
        onStart={startGame}
        onReset={resetGame}
        showHint={showHint}
        setShowHint={setShowHint}
      />

      <Overlays
        isLevelComplete={isLevelComplete}
        isGameOver={isGameOver}
        isGameFinished={isGameFinished}
        deathMessage={deathMessage}
        showHint={showHint}
        hintText={currentLevel.hint}
        onNextLevel={nextLevel}
        onReplay={handleReplay}
        onReset={resetGame}
        onCloseHint={() => setShowHint(false)}
      />
    </div>
  );
};

export default ArchitectsConsole;

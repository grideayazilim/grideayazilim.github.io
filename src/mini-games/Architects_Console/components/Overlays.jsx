import React from "react";
import styles from "./Overlays.module.scss";

const Overlays = ({
  isLevelComplete,
  isGameOver,
  isGameFinished,
  deathMessage,
  showHint,
  hintText,
  onNextLevel,
  onReplay,
  onReset,
  onCloseHint,
}) => {
  return (
    <>
      {/* İPUCU KARTI */}
      {showHint && (
        <div className={styles.hintCard}>
          <h3>💡 İPUCU</h3>
          <p style={{ whiteSpace: "pre-line" }}>{hintText}</p>
          <button onClick={onCloseHint} className={styles.closeHintBtn}>
            Anladım
          </button>
        </div>
      )}

      {/* KAZANDIN MODALI */}
      {isLevelComplete && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>SEVİYE GEÇİLDİ! 🎉</h2>
            <div className={styles.modalButtons}>
              <button onClick={onReplay} className={styles.replayBtn}>
                Tekrar
              </button>
              <button onClick={onNextLevel} className={styles.nextBtn}>
                Sonraki ➡
              </button>
            </div>
          </div>
        </div>
      )}

      {/* KAYBETTİN MODALI */}
      {isGameOver && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal} style={{ borderColor: "red" }}>
            <h2 style={{ color: "#ff5252" }}>{deathMessage}</h2>
            <div className={styles.modalButtons}>
              <button onClick={onReset} className={styles.replayBtn}>
                Hemen Düzelt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OYUN BİTTİ MODALI */}
      {isGameFinished && (
        <div className={styles.modalOverlay}>
          <div
            className={styles.modal}
            style={{ border: "4px solid gold", boxShadow: "0 0 25px gold" }}
          >
            <h2 style={{ color: "gold" }}>🏆 TEBRİKLER MİMAR! 🏆</h2>
            <p style={{ fontSize: "18px", margin: "20px 0" }}>
              Konsoldaki tüm hataları düzelttin ve sistemi kurtardın. <br />
              CSS bilginle harika bir iş çıkardın!
            </p>
            <div className={styles.modalButtons}>
              <button
                onClick={onReplay}
                className={styles.replayBtn}
                style={{ fontSize: "16px", padding: "12px 24px" }}
              >
                Final Bölümünü Tekrar Oyna
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Overlays;

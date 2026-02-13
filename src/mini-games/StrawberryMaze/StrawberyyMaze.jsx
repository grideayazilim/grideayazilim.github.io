import { useState, useEffect, useCallback } from "react";
import {
  FaGamepad,
  FaQuestionCircle,
  FaCheck,
  FaFlag,
  FaUser,
  FaTrophy,
  FaBolt,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaRedo,
  FaTimesCircle,
  FaCheckCircle,
  FaBrain,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaCode,
  FaLightbulb,
  FaKeyboard,
} from "react-icons/fa";
import { choiceQuestions, codeQuestions } from "./StrawberryMazeLevels.js";
import "./StrawberryMaze.scss";
import strawberryImg from "./strawberry.png";
import houseImg from "./house.png";
import duckiImg from "./ducki.png";

//  0=yol, 1=duvar, 2=soru, 3=başlangıç, 4=bitiş
const mazeLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 0, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 2, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 1],
  [1, 0, 0, 0, 0, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Soru noktaları
const countQuestionPoints = (maze) => {
  let count = 0;
  maze.forEach((row) =>
    row.forEach((cell) => {
      if (cell === 2) count++;
    }),
  );
  return count;
};

const TOTAL_QUESTIONS = countQuestionPoints(mazeLayout);

// Soruları karıştır ve birleştir
const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Oyun2() {
  const [gameState, setGameState] = useState("start");
  const [playerPos, setPlayerPos] = useState({ row: 1, col: 1 });
  const [maze, setMaze] = useState(mazeLayout);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [codeAnswer, setCodeAnswer] = useState("");
  const [answerResult, setAnswerResult] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Oyun başlatma geçişi
  const startGame = () => {
    setGameState("transition");
    const mixed = shuffleArray([...choiceQuestions, ...codeQuestions]);
    setShuffledQuestions(mixed);
    setTimeout(() => {
      resetGame(mixed);
    }, 800);
  };

  // Oyunu sıfırla
  const resetGame = (qs) => {
    setPlayerPos({ row: 1, col: 1 });
    setMaze(mazeLayout.map((row) => [...row]));
    setShowQuestion(false);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setCodeAnswer("");
    setAnswerResult(null);
    setQuestionsAnswered(0);
    setCorrectAnswers(0);
    setAnsweredQuestionIds([]);
    if (qs) setShuffledQuestions(qs);
    setGameState("playing");
  };

  // Klavye hareketi
  const handleKeyDown = useCallback(
    (e) => {
      if (gameState !== "playing" || showQuestion) return;

      const { row, col } = playerPos;
      let newRow = row;
      let newCol = col;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          newRow = row - 1;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          newRow = row + 1;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          newCol = col - 1;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          newCol = col + 1;
          break;
        default:
          return;
      }

      e.preventDefault();

      if (
        newRow >= 0 &&
        newRow < maze.length &&
        newCol >= 0 &&
        newCol < maze[0].length &&
        maze[newRow][newCol] !== 1
      ) {
        const cellType = maze[newRow][newCol];
        setPlayerPos({ row: newRow, col: newCol });

        if (cellType === 2) {
          const questionIndex = questionsAnswered % shuffledQuestions.length;
          setCurrentQuestion(shuffledQuestions[questionIndex]);
          setShowQuestion(true);
          setSelectedAnswer(null);
          setCodeAnswer("");
          setAnswerResult(null);
        }

        if (cellType === 4) {
          setGameState("won");
        }
      }
    },
    [
      gameState,
      playerPos,
      maze,
      showQuestion,
      questionsAnswered,
      shuffledQuestions,
    ],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Çoktan seçmeli cevap seçimi
  const handleAnswerSelect = (index) => {
    if (answerResult !== null) return;
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correct;
    setAnswerResult(isCorrect ? "correct" : "incorrect");
    setQuestionsAnswered((prev) => prev + 1);

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      const newMaze = maze.map((row) => [...row]);
      newMaze[playerPos.row][playerPos.col] = 5;
      setMaze(newMaze);
      setAnsweredQuestionIds((prev) => [...prev, currentQuestion.id]);
    }
  };

  // Kod cevabı kontrol
  const handleCodeSubmit = () => {
    if (answerResult !== null || codeAnswer.trim() === "") return;

    const trimmed = codeAnswer.trim();
    const isCorrect = currentQuestion.acceptedAnswers.some(
      (ans) =>
        ans.toLowerCase().replace(/\s+/g, "") ===
        trimmed.toLowerCase().replace(/\s+/g, ""),
    );

    setAnswerResult(isCorrect ? "correct" : "incorrect");
    setQuestionsAnswered((prev) => prev + 1);

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      const newMaze = maze.map((row) => [...row]);
      newMaze[playerPos.row][playerPos.col] = 5;
      setMaze(newMaze);
      setAnsweredQuestionIds((prev) => [...prev, currentQuestion.id]);
    }
  };

  // Devam et
  const handleContinue = () => {
    if (answerResult === "incorrect") {
      setPlayerPos({ row: 1, col: 1 });
    }
    setShowQuestion(false);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setCodeAnswer("");
    setAnswerResult(null);
  };

  // Hücre çizimi
  const renderCell = (cellType, rowIndex, colIndex) => {
    const isPlayer = playerPos.row === rowIndex && playerPos.col === colIndex;

    let cellClass = "maze-cell";
    let content = null;

    switch (cellType) {
      case 1:
        cellClass += " wall";
        break;
      case 0:
        cellClass += " path";
        content = <div className="path-placeholder"></div>;
        break;
      case 2:
        cellClass += " path question-point";
        content = (
          <div className="question-circle">
            <img src={strawberryImg} alt="Soru" className="cell-image" />
          </div>
        );
        break;
      case 3:
        cellClass += " path start";
        content = (
          <>
            <div className="path-placeholder"></div>
            <FaFlag className="start-icon" size={18} />
          </>
        );
        break;
      case 4:
        cellClass += " path end";
        content = (
          <>
            <div className="path-placeholder"></div>
            <img src={houseImg} alt="Bitiş" className="cell-image end-image" />
          </>
        );
        break;
      case 5:
        cellClass += " path question-answered";
        content = (
          <div className="answered-circle">
            <FaCheck className="checkmark" size={16} />
          </div>
        );
        break;
      default:
        cellClass += " path";
        content = <div className="path-placeholder"></div>;
    }

    if (isPlayer) {
      cellClass += " player";
      content = (
        <>
          <div className="path-placeholder"></div>
          <img
            src={duckiImg}
            alt="Oyuncu"
            className="cell-image player-image"
          />
        </>
      );
    }

    return (
      <div key={`${rowIndex}-${colIndex}`} className={cellClass}>
        {content}
      </div>
    );
  };

  // GİRİŞ EKRANI
  if (gameState === "start" || gameState === "transition") {
    return (
      <div
        className={`maze-game-container ${gameState === "transition" ? "transitioning" : ""}`}
      >
        <div className="background-placeholder"></div>
        <div
          className={`start-screen ${gameState === "transition" ? "fade-out" : ""}`}
        >
          <h1>Strawberry Maze</h1>
          <p className="description">
            Labirentte ilerle, JavaScript sorularını yanıtla ve hedefe ulaş!
          </p>
          <div className="features">
            <div className="feature">
              <span className="icon">
                <div className="feature-icon-placeholder">
                  <FaBrain size={24} />
                </div>
              </span>
              <span>Düşündürücü Sorular</span>
            </div>
            <div className="feature">
              <span className="icon">
                <div className="feature-icon-placeholder">
                  <FaMapMarkerAlt size={24} />
                </div>
              </span>
              <span>Soru noktasını bul ve cevapla</span>
            </div>
            <div className="feature">
              <span className="icon">
                <div className="feature-icon-placeholder">
                  <FaBolt size={24} />
                </div>
              </span>
              <span>Yanlış cevap = Başa dön!</span>
            </div>
          </div>
          <button className="start-btn" onClick={startGame}>
            <FaPlay size={20} />
            Maceraya Başla
          </button>
        </div>
      </div>
    );
  }

  // KAZANMA EKRANI
  if (gameState === "won") {
    return (
      <div className="maze-game-container">
        <div className="background-placeholder game-bg"></div>
        <div className="modal-overlay">
          <div className="congrats-modal">
            <div className="trophy">
              <div className="trophy-placeholder">
                <FaTrophy size={80} />
              </div>
            </div>
            <h1>Tebrikler!</h1>
            <p>Labirent Macerasını tamamladın!</p>
            <div className="final-score">
              <FaCheckCircle size={20} />
              {correctAnswers} / {questionsAnswered} Doğru Cevap
            </div>
            <p className="result-message">
              {correctAnswers === questionsAnswered
                ? "Mükemmel! JavaScript ustasısın!"
                : correctAnswers >= questionsAnswered / 2
                  ? "Harika! JavaScript öğrenmeye devam et!"
                  : "Pratik yapmaya devam et! Tekrar dene!"}
            </p>
            <button
              className="play-again-btn"
              onClick={() => setGameState("start")}
            >
              <FaRedo size={20} />
              Tekrar Oyna
            </button>
          </div>
        </div>
      </div>
    );
  }

  // OYUN EKRANI
  return (
    <div className="maze-game-container game-active">
      <div className="background-placeholder game-bg"></div>
      <div className="game-header">
        <div className="score-display">
          <span className="score-item questions">
            <FaQuestionCircle size={16} />
            Sorular: {questionsAnswered}/{TOTAL_QUESTIONS}
          </span>
          <span className="score-item correct">
            <FaCheck size={16} />
            Doğru: {correctAnswers}
          </span>
        </div>
        <div className="instructions-inline">
          <span>Kontroller:</span>
          <span className="key">
            <FaArrowUp size={12} />
          </span>
          <span className="key">
            <FaArrowDown size={12} />
          </span>
          <span className="key">
            <FaArrowLeft size={12} />
          </span>
          <span className="key">
            <FaArrowRight size={12} />
          </span>
          <span>veya WASD</span>
        </div>
      </div>

      <div className="maze-wrapper">
        <div
          className="maze-container"
          style={{
            gridTemplateColumns: `repeat(${maze[0].length}, 1fr)`,
            gridTemplateRows: `repeat(${maze.length}, 1fr)`,
          }}
        >
          {maze.map((row, rowIndex) =>
            row.map((cell, colIndex) => renderCell(cell, rowIndex, colIndex)),
          )}
        </div>
      </div>

      {/* SORU MODALI */}
      {showQuestion && currentQuestion && (
        <div className="modal-overlay">
          <div className="question-modal">
            <div className="modal-header">
              {currentQuestion.type === "code" ? (
                <FaCode size={28} />
              ) : (
                <FaBrain size={28} />
              )}
              <h2>Soru #{questionsAnswered + 1}</h2>
              {currentQuestion.type === "code" && (
                <span className="question-type-badge code-badge">
                  <FaKeyboard size={14} />
                  Kod Yaz
                </span>
              )}
              {currentQuestion.type === "choice" && (
                <span className="question-type-badge choice-badge">
                  <FaBrain size={14} />
                  Çoktan Seçmeli
                </span>
              )}
            </div>

            <div className="question-text">
              {currentQuestion.question.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < currentQuestion.question.split("\n").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </div>

            {/* ÇOKTAN SEÇMELİ */}
            {currentQuestion.type === "choice" && (
              <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${
                      selectedAnswer === index ? "selected" : ""
                    } ${
                      answerResult !== null && index === currentQuestion.correct
                        ? "correct"
                        : ""
                    } ${
                      answerResult === "incorrect" && selectedAnswer === index
                        ? "incorrect"
                        : ""
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answerResult !== null}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                ))}
              </div>
            )}

            {/* KOD YAZMA */}
            {currentQuestion.type === "code" && (
              <div className="code-input-container">
                {currentQuestion.hint && answerResult === null && (
                  <div className="hint-box">
                    <FaLightbulb size={16} />
                    <span>{currentQuestion.hint}</span>
                  </div>
                )}
                <div className="code-editor">
                  <div className="code-editor-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="editor-title">script.js</span>
                  </div>
                  <textarea
                    className={`code-textarea ${
                      answerResult === "correct" ? "correct" : ""
                    } ${answerResult === "incorrect" ? "incorrect" : ""}`}
                    value={codeAnswer}
                    onChange={(e) => setCodeAnswer(e.target.value)}
                    placeholder="Kodunuzu buraya yazın..."
                    disabled={answerResult !== null}
                    rows={3}
                    spellCheck={false}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleCodeSubmit();
                      }
                    }}
                  />
                </div>
                {answerResult === null && (
                  <button
                    className="submit-code-btn"
                    onClick={handleCodeSubmit}
                    disabled={codeAnswer.trim() === ""}
                  >
                    <FaPlay size={14} />
                    Kodu Çalıştır
                  </button>
                )}
                {answerResult === "incorrect" && (
                  <div className="correct-answer-box">
                    <span className="correct-label">Doğru Cevap:</span>
                    <code>{currentQuestion.correctAnswer}</code>
                  </div>
                )}
              </div>
            )}

            {answerResult && (
              <>
                <div className={`feedback ${answerResult}`}>
                  {answerResult === "correct" ? (
                    <>
                      <FaCheckCircle size={20} /> Doğru! Harika!
                    </>
                  ) : (
                    <>
                      <FaTimesCircle size={20} /> Yanlış! Başa dönüyorsun!
                    </>
                  )}
                </div>
                {answerResult === "incorrect" &&
                  currentQuestion.explanation && (
                    <div className="explanation">
                      <div className="explanation-header">
                        <FaInfoCircle size={18} />
                        <span>Açıklama</span>
                      </div>
                      <p>{currentQuestion.explanation}</p>
                    </div>
                  )}
                <button className="continue-btn" onClick={handleContinue}>
                  {answerResult === "correct" ? "Devam Et" : "Tekrar Dene"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

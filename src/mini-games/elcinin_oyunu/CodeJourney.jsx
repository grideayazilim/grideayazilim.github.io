import { useState } from "react";
import "./CodeJourney.scss";
import QuestionPanel from "./QuestionPanel";
import { Questions } from "./Questions";
import diceImg from "./dice.png";
import pawnImg from "./pawn.png";
import gameTitle from "./game-title.png";

function CodeJourney() {

    const positions = [
        { row: 1, col: 1 },
        { row: 1, col: 2 },
        { row: 1, col: 3 },
        { row: 1, col: 4 },
        { row: 1, col: 5 },

        { row: 2, col: 5 },
        { row: 3, col: 5 },
        { row: 4, col: 5 },
        { row: 5, col: 5 },
        
        { row: 5, col: 4 },
        { row: 5, col: 3 },
        { row: 5, col: 2 },
        { row: 5, col: 1 },
        
        { row: 4, col: 1 },
        { row: 3, col: 1 },
        { row: 2, col: 1 },  
    ]

    const [gameFinished, setGameFinished] = useState(false);

    const [playerPosition, setPlayerPosition] = useState(0);

    const [gameStarted, setGameStarted] = useState(false);

    const [dice, setDice] = useState(null);

    const [isRolling, setIsRolling] = useState(false);

    const rollDice = () => {
        if (isRolling) return;

        if(activeQuestion) {
            alert("Önce soruyu cevaplamalısın");
            return;
        }

        setGameStarted(true);

        setPreviousPosition(playerPosition);

        const finalRoll = Math.floor(Math.random() * 3) + 1;
        setDice(finalRoll);
        setIsRolling(true);

        let stepsTaken = 0;

        const moveInterval = setInterval(() => {
            stepsTaken++;

            setPlayerPosition((prev) => {
                const nextPos = prev +1;

                if (nextPos >= positions.length) {
                    clearInterval(moveInterval);
                    setIsRolling(false);
                    setGameFinished(true);
                    return prev;
                }

                if (stepsTaken >= finalRoll) {
                    clearInterval(moveInterval);
                    setIsRolling(false);

                    if (nextPos !== 0) {
                        setActiveQuestion(Questions[nextPos]);
                    }
                }

                return nextPos;
            });
        }, 400);


    };


    const [activeQuestion, setActiveQuestion] = useState(null);

    const [previousPosition, setPreviousPosition] = useState(null);

    const handleAnswer = (isCorrect) => {
        if (!isCorrect && previousPosition !== null) {
            let current = playerPosition;

            const backInterval = setInterval(() => {
                current--;

                setPlayerPosition(current);

                if (current <= previousPosition) {
                    clearInterval(backInterval);
                }
                
            }, 300);
        }

        setActiveQuestion(null);

    };




    return (
        <div className="oyun1-container">

            <div className="game-board">

            <div className="board-wrapper">

            <div className="board">
                {positions.map((pos, index) => (
                    <div
                    key={index}
                    className={`cell color-${index % 3} ${playerPosition === index ? "active" : ""}`}
                    style={{
                        gridRow: pos.row,
                        gridColumn: pos.col,
                    }}
                    >
                        {index + 1}

                        {playerPosition === index && (
                            <img src={pawnImg} alt="player" className="player" />
                        )}
                    </div>
                ))}

                <div className="dice-area" onClick={rollDice}>
                    <img src={diceImg} alt="dice" className={`dice ${isRolling ? "rolling" : ""}`} />
                    { dice && <span className="dice-number">Rolled: {dice}</span> }
                </div>
            


            </div>

            </div>

            <div className="right-panel">

                {gameFinished ? (
                    <div className="finish-panel">
                        <h2>🎉 You Win!</h2>
                        <p>You completed Code Journey!</p>

                    </div>
                ) : activeQuestion ? (
                    <QuestionPanel question={activeQuestion} onAnswer={handleAnswer} />
                ) : !gameStarted ? (
                    <div className="intro-panel">
                        <img src={gameTitle} alt="gameTitle" className="intro-image" />

                        <h2>Welcome to Code Journey !</h2>

                        <p>
                            Roll the dice, move across the board,
                            answer coding challenges,
                            and reach the finish!
                        </p>

                        <ul>
                            <li>🎲 Roll dice to move</li>
                            <li>❓ Answer questions</li>
                            <li>⬅️ Wrong answers move you back</li>
                            <li>🏁 Reach finish to win</li>
                        </ul>

                        <span className="intro-tip">
                            Click the dice to start!
                        </span>

                    </div>
                ) : null}

                
            </div>


           </div> 

        </div>
    );
}

export default CodeJourney;
import { useEffect, useState } from "react";
import "./QuestionPanel.scss";


function formatHtmlCode(htmlString) {
    if (!htmlString) return [];
  const lines = htmlString
    .trim()
    .split("\n")
    .map(line => line.trim());

  let indentLevel = 0;

  return lines.map(line => {
    if (line.startsWith("</")) {
      indentLevel = Math.max(indentLevel - 1, 0);
    }

    const formattedLine = "  ".repeat(indentLevel) + line;

    const isOpeningTag = 
      line.startsWith("<") &&
      !line.startsWith("</") &&
      !line.endsWith("/>") &&
      !line.includes("</") &&
      !line.startsWith("<!--");
    
    if (isOpeningTag) {
      indentLevel++;
    }

    return formattedLine;
  });
}


function QuestionPanel({ question, onAnswer }) {
    if (!question) return null;

    const [result, setResult] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [animation, setAnimation] = useState("");

    const editor = question?.editor || {};

    useEffect (() => {
        setUserInput("");
        setResult(null);
        setAnimation("");
    }, [question.id]);

    

    useEffect(() => {
        if (result === null) return;

        const timeout = setTimeout(() => {
            onAnswer?.(result);
        }, 5000);

        return () => clearTimeout(timeout);
    }, [result]); 


    const isHtmlQuestion = question.type === "html";
    const formattedHtml = isHtmlQuestion
      ? formatHtmlCode(question.htmlCode)
      : [];


    const checkAnswer = () => {
        const isCorrect =
            userInput.trim() === question.expected?.trim();

        setResult(isCorrect);

        if (isCorrect && question?.figure.animation) {
            setAnimation(question.figure.animation);
        }

    };

    const animationClass = 
        question.figure?.type === "css" && result === true
            ? question.figure.animation 
            : ""; 

    



    return (
        <div className="question-panel">

            <div className="question-header">
                <h3>{question.title}</h3>
                <p>{question.text}</p>
            </div>

            <div className="question-body">

                <div className={`figure-area ${question.figure?.type === "css" ? "css-scene" : ""}
                ${question.figure?.scene || ""}
                ${animationClass}
                `}>
                    {question.figure?.type === "image" && (
                        <img
                        src={question.figure.src}
                        alt={question.figure.alt}
                        className="figure-image"
                        />
                    )}

                    {question.figure?.type === "css" && 
                        question.figure.items.map(item => (
                            <img
                            key={item.id}   
                            src={item.src}
                            alt={item.alt}
                            className={`figure-item ${item.role}`}
                            />
                        ))
                    }
                </div>


                
                <div className="editor-area">

                    {isHtmlQuestion && (
                        <div className="editor-block readonly">

                            <div className="editor-header">table.html</div>

                            <div className="editor-inner">
                                <div className="line-numbers">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                </div>

                                <div className="code-content">
                                    {formattedHtml.map((line, i) => (
                                        <div key={i} className="code-line">{line}</div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                    <div className={`editor-block mode-${editor.mode}`}>

                        <div className="editor-header">style.css</div>

                        <div className="editor-inner">
                            <div className="line-numbers">
                                {editor.mode === "selector" && <span>1</span>}
                                {editor.template?.map((_, i) => (
                                    <span  key={i}>
                                        {editor.mode === "selector" ? i + 2 : i + 1}
                                    </span>
                                ))}
                            </div>

                            <div className="code-content">
                                {editor.mode === "selector" && (
                                    <div className="code-line editable">
                                        <input
                                        className="code-inline-input"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        placeholder={editor.inputPlaceholder}
                                        />
                                    </div>
                                )}

                                {editor.template?.map((line, index) => {
                                    if (line.includes("{{input}}")) {
                                        return (
                                            <div key={index} className="code-line editable">
                                                <input
                                                className="code-inline-input"
                                                value={userInput}
                                                onChange={(e) => setUserInput(e.target.value)}
                                                placeholder={editor.inputPlaceholder}
                                                />
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={index} className="code-line">{line}</div>
                                    );
                                })}



                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>

            <div className="question-footer">
                <button className="submit-btn" onClick={checkAnswer}>Kontrol Et</button>

                {result === true && <span className="result-success">✅ Doğru!</span>}

                {result === false && <span className="result-error">❌ Yanlış! Zarı tekrar at ve yeniden dene.</span>}
            </div>

            

        </div>
    );
}

export default QuestionPanel;
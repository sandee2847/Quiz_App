import React, { useState } from "react";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "London", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
      ],
    },
    {
      questionText: "What is the largest country in the world?",
      answerOptions: [
        { answerText: "Russia", isCorrect: true },
        { answerText: "Canada", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "United States", isCorrect: false },
      ],
    },
    {
      questionText: "What is the currency of Japan?",
      answerOptions: [
        { answerText: "Dollar", isCorrect: false },
        { answerText: "Yen", isCorrect: true },
        { answerText: "Euro", isCorrect: false },
        { answerText: "Pound", isCorrect: false },
      ],
    },
  ];

  function handleAnswerButtonClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResults(true);
    }
  }

  function handleRestartButtonClick() {
    setQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  }

  return (
    <div>
      <h1>Quiz App</h1>
      {showResults ? (
        <div>
          <h2>Results:</h2>
          <p>You scored {score} out of {questions.length}.</p>
          <button onClick={handleRestartButtonClick}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {questionIndex + 1}</h2>
          <p>{questions[questionIndex].questionText}</p>
          {questions[questionIndex].answerOptions.map((answerOption, index) => (
            <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
              {answerOption.answerText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

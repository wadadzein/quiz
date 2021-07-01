import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

export default function QuizHandler() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      questionText: "What is the capital of France?",
      questionOptions: [
        { answerText: "Beirut", isCorrect: false },
        { answerText: "Newyork", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "London", isCorrect: false }
      ]
    },
    {
      questionText: "What is the capital of Lebanon?",
      questionOptions: [
        { answerText: "Paris", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Beirut", isCorrect: true },
        { answerText: "Newyork", isCorrect: false }
      ]
    }
  ];
  const [questionNumber, setQuestionNumber] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setQuestionNumber(false);
    }
  };

  return (
    <div className="quiz">
      <div>
        {questionNumber ? (
          <div>
            Question {currentQuestion + 1}/{questions.length}
          </div>
        ) : (
          <div>you reached the end of the quiz</div>
        )}
      </div>
      {showScore ? (
        <Alert variant="success">
          You scored {score} out of {questions.length}
        </Alert>
      ) : (
        <Container className="container">
       
            <div className="question">{questions[currentQuestion].questionText}</div>
      
          <div className="Answer">
            {questions[currentQuestion].questionOptions.map(
              (questionOption) => (
                <Container as={ButtonGroup}>
                  {" "}
                  <Button
                    variant="primary"
                    onClick={() => handleClick(questionOption.isCorrect)}
                    className="buttons"
                  >
                    {questionOption.answerText}
                  </Button>{" "}
                </Container>
              )
            )}
          </div>
        </Container>
      )}
    </div>
  );
}

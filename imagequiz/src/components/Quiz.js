import quizzes from "../data";
import { Button, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useState } from "react";
import "../Styles/Question.css";

const getFlowerName = () => {
  const name = window.location.href.split("/");
  return name[name.length - 1];
};

const findQuestions = (name) => {
  for (let quiz of quizzes) {
    if (quiz[0].answer === name) {
      return quiz;
    }
  }
};

let Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const name = getFlowerName();
  const quiz = findQuestions(name);

  const CreateArrayQuiz = (quiz) => {
    const [score, setScore] = useState(0);
    const [choice, setChoice] = useState("");
    const questions = quiz.map((q) => {
      return (
        <Row key={`${q.answer}`}>
          <Col md={6}>
            <Image fluid src={q.picture} className="quizImage"></Image>
          </Col>
          <Col md={3}>
            {q.choices.map((c) => (
              <div key={c}>
                {choice === "" ? (
                  <Col xs>
                    <Button
                      onClick={() => {
                        if (q.answer === c) {
                          setScore(score + 1);
                        }
                        setChoice({ c });
                      }}
                    >
                      {c}
                    </Button>
                  </Col>
                ) : (
                  <Col xs>
                    <Button
                      variant={c === q.answer ? "info" : "outline-danger"}
                    >
                      {c}
                    </Button>
                  </Col>
                )}
              </div>
            ))}
          </Col>
          <Col md={3}>
            {choice !== "" ? (
              <Button
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1);
                  setChoice("");
                }}
              >
                Next Question!
              </Button>
            ) : (
              <Button variant="outline-secondary">Next Question!</Button>
            )}
          </Col>
        </Row>
      );
    });

    let restartQuiz = (
      <div key={questions.length}>
        <h2>You finished the quiz</h2>
        <h3>
          You scored {score} out of {questions.length}
        </h3>
        <Button
          onClick={() => {
            setCurrentQuestion(-1);
            setScore(0);
          }}
        >
          Go back to beginning
        </Button>
        <Button href="#/">Go Home</Button>
      </div>
    );
    questions.push(restartQuiz);

    return questions;
  };

  const questions = CreateArrayQuiz(quiz);

  return (
    <>
      <h1>Quiz for {name}</h1>
      <div className="justify-content-center">
        <div className="questionContainer">
          {currentQuestion >= 0 ? (
            questions[currentQuestion]
          ) : (
            <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
              Start the Quiz
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;

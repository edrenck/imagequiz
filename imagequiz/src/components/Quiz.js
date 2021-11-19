import { Button, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../Styles/Question.css";
import { useParams } from "react-router";
import api from "../communication/api";

let Quiz = () => {
  const { quizName } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(0);
  let email = localStorage.getItem("email");
  useEffect(() => {
    if (quiz.length === 0) {
      api.getQuiz(quizName).then((x) => setQuiz(x));
    }
  }, []);

  const CreateArrayQuiz = (quiz) => {
    const [choice, setChoice] = useState("");
    const questions = quiz.map((q) => {
      return (
        <Row key={`${q.answer}`}>
          <Col md={6}>
            <Image fluid src={q.picture} className="card-img-top"></Image>
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
                  if (currentQuestion > quiz.length - 2) {
                    saveScore();
                  }
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

  const saveScore = () => {
    api
      .saveScore(email, quizName, score)
      .then((x) => console.log("Score saved succesfully"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1>Quiz for {quizName}</h1>
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

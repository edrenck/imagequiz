const baseURL = "http://localhost:3000";
let getFlowers = () => {
  return fetch(`${baseURL}/flowers`).then((x) => {
    let y = x.json();
    console.log(y);
    return y;
  });
};

let getQuiz = (name) => {
  return fetch(`${baseURL}/quiz/${name}`)
    .then((x) => x.json())
    .then((x) =>
      x.map((y) => {
        return {
          picture: y.picture,
          choices: y.choices.split(","),
          answer: y.answer,
        };
      })
    );
};

let saveScore = (email, quizName, score) => {
  return fetch(`${baseURL}/score`, {
    method: "POST",
    body: JSON.stringify({ email, quizName, score }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((x) => x.json());
};

let register = (name, email, password) => {
  return fetch(`${baseURL}/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((x) => x.json());
};

let login = (email, password) => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((x) => x.json());
};

let api = {
  getFlowers: getFlowers,
  getQuiz: getQuiz,
  saveScore: saveScore,
  register: register,
  login: login,
};

export default api;

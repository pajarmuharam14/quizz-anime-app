const questionsAnswers = [
  {
    question: "Which tailed beast does Gaara possess?",
    answers: [
      { text: "2 Tails", correct: false },
      { text: "1 Tails", correct: true },
      { text: "3 Tails", correct: false },
      { text: "5 Tails", correct: false },
    ],
  },
  {
    question: "How did Itachi die?",
    answers: [
      { text: "Itachi is still alive", correct: false },
      { text: "Itachi was plagued by a terminal diseas", correct: false },
      { text: "He killed himself", correct: false },
      { text: "He was killed by Sasuke", correct: true },
    ],
  },
  {
    question: "Who is Rock Lee's mentor?",
    answers: [
      { text: "He doesn't have a mentor", correct: false },
      { text: "Gamabunta", correct: false },
      { text: "Guy Sensei", correct: true },
      { text: "Tsunade", correct: false },
    ],
  },
  {
    question: "Who is Kiba Inuzuka's partner, and best friend?",
    answers: [
      { text: "Sasuke Uchiha", correct: false },
      { text: "Gaara", correct: false },
      { text: "Akamaru", correct: true },
      { text: "Kisame Hoshigaki", correct: false },
    ],
  },
  {
    question: "Who were Naruto's main Teachers/Mentors/Trainers?",
    answers: [
      { text: "Guy, Madara, Kisame, Shino, Konan", correct: false },
      { text: "Ebisu, Jiraiya, Iruka, Kakashi, Fukasaku", correct: true },
      { text: "Kiba, Tsunade, Pain, Obito, Deidara", correct: false },
      { text: "Itachi, Sasori, Yahiko, Kakuzu, Hinata", correct: false },
    ],
  },
  {
    question: "What is the Nine Tailed Beast true name?",
    answers: [
      { text: "Kurama", correct: true },
      { text: "The Nine Tails", correct: false },
      { text: "Naruto - (Or any other that has control over the beast)", correct: false },
      { text: "The Ninth Sacred Beast", correct: false },
    ],
  },
  {
    question: "Shikamaru's main Jutsu is?",
    answers: [
      { text: "Shadow Possession Jutsu", correct: true },
      { text: "Phoenix Flower Jutsu", correct: false },
      { text: "Only Bukijutsu/Taijutsu", correct: false },
      { text: "All types of Genjutsu", correct: false },
    ],
  },
  {
    question: "How many tails does Kurama have?",
    answers: [
      { text: 3, correct: false },
      { text: 7, correct: false },
      { text: 9, correct: true },
      { text: "It changes depending on his mood", correct: false },
    ],
  },
  {
    question: "What team is Kakashi the leader of?",
    answers: [
      { text: "Team 7", correct: true },
      { text: "Twelve Guardian Ninja", correct: false },
      { text: "Taka", correct: false },
      { text: "Team Rocket", correct: false },
    ],
  },
  {
    question: "How did Neji die?",
    answers: [
      { text: "He is still alive", correct: false },
      { text: "He got killed by Kakuzu", correct: false },
      { text: "Sacrifice", correct: true },
      { text: "He killed himself because of his curse", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerBtns = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questionsAnswers[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer.text;
    answerBtns.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", (e) => {
      const selectedAnswer = e.target;
      const isCorrect = selectedAnswer.dataset.correct === "true";
      if (isCorrect) {
        selectedAnswer.classList.add("correct");
        score++;
      } else {
        selectedAnswer.classList.add("incorrect");
      }

      Array.from(answerBtns.children).forEach((btn) => {
        btn.disabled = true;
      });
      nextBtn.style.display = "block";
    });
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questionsAnswers.length}`;
  nextBtn.innerHTML = "Play Again?";
  nextBtn.style.display = "block";
};

const handleNextBtn = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questionsAnswers.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questionsAnswers.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();

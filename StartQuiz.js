const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let NewQuesions = [];

let questions = [
    {
        question: "How many computer languages are in use?",
        choice1: '2000',
        choice2: '300',
        choice3: '90',
        choice4:  '500',
        answer: 1
    },
    {
        question: "What does the Internet prefix WWW stand for?",
        choice1: "Wide Width Wickets",
        choice2: "World wide web",
        choice3: 'Worldwide',
        choice4: "Western Washington World",
        answer: 2
    },
    {
        question: "How many computer languages are in use?",
        choice1:'ENIAC',
        choice2:'UNIVAC',
        choice3:'NASA',
        choice4:'SAGE',
        answer: 3
    },
    {
        question: "Which of these products is not made by the Apple Corporation?",
        choice1: 'IMAX',
        choice2: 'iPhone',
        choice3:'iMac',
        choice4:'iPod',
        answer: 1
    },
    {
        question: "To which of these devices is the cellular telephone most closely related?",
        choice1: 'Telegraph',
        choice2: 'Radio',
        choice3: "Light bulb",
        choice4: 'Telescope',
        answer: 2
    },    
];
const correct_marks = 20;
const total_questions = 5;
startGame = () => {
  questionCounter = 0;
  score = 0;
  NewQuesions = [...questions];
  getNewQuestion();
};
getNewQuestion = () => {
  if (NewQuesions.length === 0 || questionCounter >= total_questions) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * NewQuesions.length);
  currentQuestion = NewQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  NewQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    if( selectedAnswer == currentQuestion.answer){
        hightlight = 'correct';
    }if( selectedAnswer != currentQuestion.answer){
        hightlight = 'incorrect';
    }
    if (hightlight === "correct") {
        incrementScore(correct_marks);
      }

    selectedChoice.parentElement.classList.add(hightlight);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(hightlight);
      getNewQuestion();
    }, 800);
  });
});

incrementScore = total => {
    score += total;
    scoreText.innerText = score;
};

startGame();

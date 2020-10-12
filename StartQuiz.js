const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const moveText = document.getElementById("moveText");
const moveBarFull= document.getElementById("moveBarFull");
const scoreText = document.getElementById("score");
const loader = document.getElementById('loader');
const StartQuiz = document.getElementById('StartQuiz');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let NewQuesions = [];

let questions = [
    {
        question: "How many computer languages are in use?",
        option1: '2000',
        option2: '300',
        option3: '90',
        option4:  '500',
        answer: 1
    },
    {
        question: "What does the Internet prefix WWW stand for?",
        option1: "Wide Width Wickets",
        option2: "World wide web",
        option3: 'Worldwide',
        option4: "Western Washington World",
        answer: 2
    },
    {
        question: "How many computer languages are in use?",
        option1:'ENIAC',
        option2:'UNIVAC',
        option3:'NASA',
        option4:'SAGE',
        answer: 3
    },
    {
        question: "Which of these products is not made by the Apple Corporation?",
        option1: 'IMAX',
        option2: 'iPhone',
        option3:'iMac',
        option4:'iPod',
        answer: 1
    },
    {
        question: "To which of these devices is the cellular telephone most closely related?",
        option1: 'Telegraph',
        option2: 'Radio',
        option3: "Light bulb",
        option4: 'Telescope',
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
  StartQuiz.classList.remove('hidden');
    loader.classList.add('hidden');
};
getNewQuestion = () => {
  if (NewQuesions.length === 0 || questionCounter >= total_questions) {
    localStorage.setItem("mostRecentScore", score);
   return window.location.assign("finish.html");
  }

  questionCounter++;
  moveText.innerText = `Question ${questionCounter}/${total_questions}`;
    //Update the moveBar
    moveBarFull.style.width = `${(questionCounter / total_questions) * 100}%`;

  const questionIndex = Math.floor(Math.random() * NewQuesions.length);
  currentQuestion = NewQuesions[questionIndex];
  question.innerText = currentQuestion.question;


  options.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  NewQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

options.forEach(option => {
  option.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedoption = e.target;
    const selectedAnswer = selectedoption.dataset["number"];

    if( selectedAnswer == currentQuestion.answer){
        hightlight = 'correct';
    }if( selectedAnswer != currentQuestion.answer){
        hightlight = 'incorrect';
    }
    if (hightlight === "correct") {
        incrementScore(correct_marks);
      }

    selectedoption.parentElement.classList.add(hightlight);

    setTimeout(() => {
      selectedoption.parentElement.classList.remove(hightlight);
      getNewQuestion();
    }, 800);
  });
});

incrementScore = total => {
    score += total;
    scoreText.innerText = score;
};

startGame();

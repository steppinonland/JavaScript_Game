const prepareQuiz = document.querySelector("#leggo");
const timerEl = document.querySelector("#timer");
const questionEl = document.getElementById("question-text");
const buttonEl = document.getElementById("answer-buttons");
const nextQ = document.getElementById("nextOne");
const scoreboardEl = document.getElementById("scoreboard");
const correctEl = document.getElementById("correctQuestions");
const wrongEl = document.getElementById("wrongQuestions");

var timer = 75;
var scoreboard = 0;
var amtCorrect = 0;
var amtWrong = 0;
var currentQuestionIndex = 0;

const questionArray = [
  {
    title: "Which of the following are considered FALSEY values?",
    choices: ["-1", "0", "1", "spaces"],
    correct: "0",
  },
  {
    title: "What are objets made up of?",
    choices: [
      "console.log's",
      "curly braces and brackets",
      "key value pairs",
      "none of the above",
    ],
    correct: "key value pairs",
  },
  {
    title: "Which of the following means to increment?",
    choices: ["++", "$", "--", "none of the above"],
    correct: "++",
  },
  {
    title: "What does a switch statement do?",
    choices: [
      "decrements a value",
      "evaluates two sentences",
      "code that checks a finite amount of values",
      "They're the same, just different ways to name them.",
    ],
    correct: "code that checks a finite amount of values",
  },
  {
    title: "Why are functions used in Javascript?",
    choices: [
      "to create elements",
      "to connect the JS and HTML files",
      "to run a certain code over and over",
      "none of the above",
    ],
    correct: "to run a certain code over and over",
  },
  {
    title: "Which of the following are considered FALSEY values?",
    choices: ["-1", "0", "1", "spaces"],
    correct: "0",
  },
  {
    title: "What does concatenate mean?",
    choices: [
      "to get an element by an Id in HTML",
      "to add two variables together",
      "to combine one string with another",
      "all of the above",
    ],
    correct: "to combine one string with another",
  },
  {
    title: "Which of the following are considered TRUTHY values?",
    choices: ["1", "spaces", "-1", "all of the above"],
    correct: "all of the above",
  },
  {
    title:
      "What is the term for a datatype that determines true and false statements?",
    choices: [
      "Concatenate",
      "Boolean",
      "Template Literal",
      "None of the Above",
    ],
    correct: "Boolean",
  },
  {
    title: "True or false: is an array an object?",
    choices: ["True", "False"],
    correct: "True",
  },
];

function startQuiz() {
  let randomIndex = Math.floor(Math.random() * questionArray.length);
  displayQuestions(questionArray[randomIndex]);
  prepareQuiz.classList.add("hide");
  currentQuestionIndex = randomIndex;
}

function displayQuestions(questionArray) {
  questionEl.innerText = questionArray.title;
  questionArray.choices.forEach((choice) => {
    var button = document.createElement("button");
    button.innerText = choice;
    button.addEventListener("click", checkAnswers);
    button.classList.add("btn");
    buttonEl.appendChild(button);
  });
}

function nextUp(questionArray) {
  displayQuestions(questionArray);
}

function checkAnswers(event) {
  const selectedButton = event.target.innerText;
  const currentQuestion = questionArray[currentQuestionIndex]

  console.log(selectedButton, currentQuestion.correct)
  if (selectedButton !== currentQuestion.correct) {
    console.log('bad')
    timer -= 3
    timerEl.innerHTML = timer + "Seconds";
  } else {
    console.log('good')
    // answer is correct
    event.target.value === currentQuestion.correct;
    scoreboard += 5;
    amtCorrect++;
  }
}

// var highScoreAsk = prompt(
//   "Enter in your name below to save this to your Highscores!"
// );
// var saveScore = confirm("Do you want to save this to your Highscores?");
function completeQuiz() {
  timerEl.textContent = " ";
  let quizEnd = document.createElement("h1");
  quizEnd.textContent = "QUIZ IS OVER. THANKS FOR PLAYING!";
  document.body.appendChild(quizEnd, saveScore);
  if (saveScore) {
    highScoreAsk;
  } else {
    return;
  }
}

function init() {
  prepareQuiz.addEventListener("click", function () {
    var createTimer = setInterval(function () {
      // runs every second
      timer--;
      //if timer runs out
      if (timer === 0) {
        clearInterval(createTimer);
        completeQuiz();
      }
      // update the timer on page
      timerEl.innerHTML = timer + " seconds";
    }, 1000);
  });
  prepareQuiz.addEventListener("click", startQuiz);
  scoreboardEl.innerHTML = scoreboard;
  correctEl.innerHTML = amtCorrect;
  wrongEl.innerHTML = amtWrong;
}
init()
const prepareQuiz = document.querySelector("#leggo");
const timerEl = document.querySelector("#timer");
const quizEl = document.getElementById("quiz-box");
const questionEl = document.getElementById("question-text");
const buttonEl = document.getElementById("answer-buttons");
const nextQ = document.getElementById("nextOne");
const scoreboardEl = document.getElementById("scoreboard");
const correctEl = document.getElementById("correctQuestions");
const wrongEl = document.getElementById("wrongQuestions");
var quizEnd = document.getElementById("endgame");
var initials = document.getElementById("initials");

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

function getQuestion() {
  if (currentQuestionIndex === questionArray.length - 1) {
    completeQuiz()
  } else {displayQuestions(questionArray[currentQuestionIndex]);
  prepareQuiz.classList.add("hide");
  }
}

function displayQuestions(questionArray) {
  // clear the prev question choices butns
  // btuttonEl.innerHTML = ''
  questionEl.innerText = questionArray.title;
  questionArray.choices.forEach((choice) => {
    var button = document.createElement("button");
    button.innerText = choice;
    button.addEventListener("click", checkAnswers);
    button.classList.add("btn");
    buttonEl.appendChild(button);
  });
}

function checkAnswers(event) {
  const selectedButton = event.target.innerText;
  const currentQuestion = questionArray[currentQuestionIndex]

  if (selectedButton !== currentQuestion.correct) {
    timer -= 3
    timerEl.innerHTML = timer + " seconds";
    // increment wrongs
    amtWrong++;
    wrongEl.innerHTML = amtWrong;
    // update DOM
  } else {
    // answer is correct
    scoreboard += 5;
    amtCorrect++;
    scoreboardEl.innerHTML = scoreboard;
    correctEl.innerHTML = amtCorrect;
    // update the DOM
  }
  // load next question
  nextQ.addEventListener("click", function() {
        questionEl.innerText = " ";
        buttonEl.innerText = " ";
        if (currentQuestionIndex <= questionArray.length - 1) {
          getQuestion(currentQuestionIndex++)
        } else {
          completeQuiz ()
          questionEl.innerText = " ";
          buttonEl.innerText = " ";
        }
      });
}

function completeQuiz() {
  // hide all of the instructions/beginning stuff using setAttribute("clss", "hide");
  quizEnd.removeAttribute("class", "hide");
  initials.removeAttribute("class", "hide");
  timer = 0;
  timerEl.innerHTML = timer;
  let scoresButton = document.createElement("button");
  scoresButton.innerText = "Save Score";
  document.body.appendChild(scoresButton);
  scoresButton.addEventListener("click", function (event) {
    var scoreStorage = JSON.parse(localStorage.getItem("scoreboard")) || [];
    scoreStorage.push({
      initials: document.getElementById("initials").value,
      scores: scoreboard,
    });
    localStorage.setItem("scores", JSON.stringify(scores));

    initials.setAttribute("class", "hide");
    document.getElementById("scoreboard").setAttribute("class", "hide");

    for (var i = 0; i < scoreStorage.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = scoreStorage[i].initials + " " + scoreboard;
      document.getElementById("scoresList").append(li);
    }
  });
  // const saveScore = confirm("Game over. Thanks for playing! Do you want to save this to your Highscores?");
  // const enterName = prompt("Enter your name to display on the Highscores!");
  // if (saveScore) {
  //   enterName
  // } else {
  //   return;
  // } if (enterName) {
  //   localStorage.setItem(enterName)
  // }
  // var highScoreStorage = document.getElementById("Highscores");
  // var anythingSaved = localStorage.getItem
  // var localHighScores = alert(anythingSaved);
  // highScoreStorage.addEventListener("click", localHighScores)
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
  prepareQuiz.addEventListener("click", getQuestion);
  scoreboardEl.innerHTML = scoreboard;
  correctEl.innerHTML = amtCorrect;
  wrongEl.innerHTML = amtWrong;
}
init()
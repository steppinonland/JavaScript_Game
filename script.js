let prepareQuiz = document.querySelector("#leggo");
let timerEl = document.querySelector("#timer");
let questionEl = document.getElementById("question-text");
var buttonEl = document.getElementById("answer-buttons");
let increaseWrong = document.getElementById("wrongQuestions");
var nextQ = document.getElementById("nxt-button");
var timer = 75;

const questionArray = [
    {
        title: "Which of the following are considered FALSEY values?",
        choices: ["-1", "0", "1", "spaces"],
        correct: "0",
    },
    {
        title: "What are objets made up of?",
        choices: ["console.log's", "curly braces and brackets", "key value pairs", "none of the above"],
        correct: "key value pairs",
    },
    {
        title: "Which of the following means to increment?",
        choices: ["++", "$", "--", "none of the above"],
        correct: "++",
    },
    {
        title: "What does a switch statement do?",
        choices: ["decrements a value",
        "evaluates two sentences", 
        "code that checks a finite amount of values", 
        "They're the same, just different ways to name them."],
        answer: "code that checks a finite amount of values",
    },
    {
        title: "Why are functions used in Javascript?",
        choices: ["to create elements", 
        "to connect the JS and HTML files", 
        "to run a certain code over and over", 
        "none of the above"],
        correct: "to run a certain code over and over",
    },
    {
        title: "Which of the following are considered FALSEY values?",
        choices: ["-1", "0", "1", "spaces"],
        correct: "0",
    },
    {
        title: "What does concatenate mean?",
        choices: ["to get an element by an Id in HTML",
        "to add two variables together",
        "to combine one string with another",
        "all of the above"],
        correct: "to combine one string with another",
    },
    {
        title: "Which of the following are considered TRUTHY values?",
        choices: ["1", "spaces", "-1", "all of the above"],
        correct: "all of the above",
    },
    {
        title: "What is the term for a datatype that determines true and false statements?",
        choices: ["Concatenate", "Boolean", "Template Literal", "None of the Above"],
        correct: "Boolean",
    },
    {
        title: "True or false: is an array an object?",
        choices: ["True", "False"],
        correct: "True",
    }
];

prepareQuiz.addEventListener("click", function() {
    var createTimer = setInterval(function () {
        // runs every second
        timer--;
        //if timer runs out
        if(timer===0) {
            clearInterval(createTimer);
            completeQuiz();
        }
// update the timer on page 
document.getElementById("timer").innerHTML = timer + " seconds";
    }, 1000); 
}); 
prepareQuiz.addEventListener("click", startQuiz);
// nextQ.addEventListener("click", nextUp);
function startQuiz () {
    let randomIndex = Math.floor(Math.random() * questionArray.length);
    displayQuestions(questionArray[randomIndex]);
    prepareQuiz.classList.add('hide');
    currentQuestionIndex = 0;
}

function displayQuestions(questionArray) {
    questionEl.innerText = questionArray.title
    questionArray.choices.forEach(choices => {
        var button = document.createElement('button');
        button.innerText = choices.text;
        button.classList.add('btn');
        button.addEventListener("click", checkAnswers);
        buttonEl.appendChild(button);
    });
}
  
  function nextUp(questionsArray) {
    displayQuestions(questionsArray++);
  }
  
  function checkAnswers(event) {
    const selectedButton = event.target;
    // const answer = selectedButton.dataset.correct;
    //check for correct answer here
    if (selectedButton.className === "answer") {
      // need to add to HTML id correctAnswerCount
      console.log("CORRECT");
      nextUp()
    } else {
      // need to add to HTML id wrongAnswerCount
      console.log("INCORRECT");
      nextUp()
    }
  }
function completeQuiz() {
    timerEl.textContent = " ";
    let quizEnd = document.createElement("h1");
    quizEnd.textContent = "QUIZ IS OVER. THANKS FOR PLAYING!";
    document.body.appendChild(quizEnd);
  }
  
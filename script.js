var prepareQuiz = document.querySelector("#leggo");
var nextQ = document.querySelector("#nextOne");
var timerEl = document.querySelector("#timer");
var quizboxElement = document.getElementById("quiz-box");
var questionEl = document.getElementById("question-text");
var buttonEl = document.getElementById("answer-buttons");
var sectionEl = document.getElementById("quizSection");
var increaseWrong = document.getElementById("wrongQuestions");
var timer = 75;
var randQuestions, currentQuestionIndex;

prepareQuiz.addEventListener("click", startQuiz);

function startQuiz() {
    prepareQuiz.classList.add('hide');
    randQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    quizboxElement.classList.remove('hide');
    questionHopper()
}

function displayQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // if () {
        button.getAttribute.correct = answer.correct
            if (answer.correct = true) {

            }
        // };
        button.addEventListener("click", chooseAnswer);
        buttonEl.appendChild(button);
    })
}

function questionHopper() {
    displayQuestion(randQuestions[currentQuestionIndex]);
}

function resetQuestion() {
    clearStatusClass()
    while (buttonEl.firstChild) {
        buttonEl.removeChild(buttonEl.firstChild);
    }
}

function chooseAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);
    Array.from(buttonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (randQuestions.length > currentQuestionIndex + 1) {
    } else {
        prepareQuiz.innerText = 'Restart'
        prepareQuiz.classList.remove('hide');
    }

}
// this is how the answers get determined as correct and incorrect
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.getAttribute('correct');
    } else {
        element.getAttribute('wrong');
        timer.value = timer -3;
    }
}
// this clears out the right and wrong values for the next question to appear
function clearStatusClass(element) {
    element.removeAttribute('correct');
    element.removeAttribute('wrong');
}

const questions = [
    {
        question: 'what is the first letter of the alphabet?',
        answers: [
            { text: 'A', correct: true },
            { text: 'B', correct: false },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
        ]
    },
    {
        question: 'what is the first number?',
        answers: [
            { text: '1', correct: true },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: false },
        ]
    },
    {
        question: 'what is the first month in the year?',
        answers: [
            { text: 'Jan', correct: true },
            { text: 'Feb', correct: false },
            { text: 'Mar', correct: false },
            { text: 'Apr', correct: false },
        ]
    },
    {
        question: 'what is the first day of the week?',
        answers: [
            { text: 'Mon', correct: true },
            { text: 'Tues', correct: false },
            { text: 'Weds', correct: false },
            { text: 'Thurs', correct: false },
        ]
    },
    {
        question: 'what is the last letter of the alphabet?',
        answers: [
            { text: 'Z', correct: true },
            { text: 'Y', correct: false },
            { text: 'X', correct: false },
            { text: 'W', correct: false },
        ]
    },
    {
        question: 'what is the second letter of the alphabet?',
        answers: [
            { text: 'B', correct: true },
            { text: 'C', correct: false },
            { text: 'D', correct: false },
            { text: 'E', correct: false },
        ]
    },
    {
        question: 'what is the second number?',
        answers: [
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '5', correct: false },
        ]
    },
    {
        question: 'what is the second to last letter of the alphabet?',
        answers: [
            { text: 'Y', correct: true },
            { text: 'X', correct: false },
            { text: 'W', correct: false },
            { text: 'V', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'bike', correct: true },
            { text: 'lemon', correct: false },
            { text: 'lime', correct: false },
            { text: 'orange', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'chair', correct: true },
            { text: 'cupcake', correct: false },
            { text: 'cookie', correct: false },
            { text: 'brownie', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'clock', correct: true },
            { text: 'shoe', correct: false },
            { text: 'boot', correct: false },
            { text: 'sandal', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'car', correct: true },
            { text: 'keyboard', correct: false },
            { text: 'monitor', correct: false },
            { text: 'mouse', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'bread', correct: true },
            { text: 'helmet', correct: false },
            { text: 'crown', correct: false },
            { text: 'hat', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'spatula', correct: true },
            { text: 'conditioner', correct: false },
            { text: 'soap', correct: false },
            { text: 'shampoo', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'wallet', correct: true },
            { text: 'libra', correct: false },
            { text: 'leo', correct: false },
            { text: 'capricorn', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'charger', correct: true },
            { text: 'nickel', correct: false },
            { text: 'quarter', correct: false },
            { text: 'dime', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'socks', correct: true },
            { text: 'fiction', correct: false },
            { text: 'nonfiction', correct: false },
            { text: 'poetry', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'duck', correct: true },
            { text: 'ring', correct: false },
            { text: 'pinky', correct: false },
            { text: 'thumb', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'Madonna', correct: true },
            { text: 'Thailand', correct: false },
            { text: 'China', correct: false },
            { text: 'Japan', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'boat', correct: true },
            { text: 'tea', correct: false },
            { text: 'coffee', correct: false },
            { text: 'soda', correct: false },
        ]
    },
    {
        question: 'Which of these items does not belong?',
        answers: [
            { text: 'pen', correct: true },
            { text: 'independent', correct: false },
            { text: 'republican', correct: false },
            { text: 'democrat', correct: false },
        ]
    }
]
// this should display a heading that says "QUIZ IS OVER.  THANKS FOR PLAYING"
// this happens when the timer 
function completeQuiz() {
    clearInterval(createTimer);
    timerEl.textContent = " ";
    let quizEnd = document.createElement("h1");
    quizEnd.textContent = "QUIZ IS OVER. THANKS FOR PLAYING!";
    document.body.appendChild(quizEnd);
  }  

prepareQuiz.addEventListener("click", function() {
    var createTimer = setInterval(function () {
        // runs every second
        timer--;
        //if timer runs out
        if(timer <= -1) {
            clearInterval(createTimer);
            completeQuiz();
        }
// update the timer on page 
document.getElementById("timer").innerHTML = timer + " seconds";
    }, 1000); 
}); 


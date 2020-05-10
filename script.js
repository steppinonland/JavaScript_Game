var prepareQuiz = document.querySelector("#leggo");
var timerEl = document.getElementById("timer");
var quizboxElement = document.getElementById("quiz-box");
var questionEl = document.getElementById("question-text");
var buttonEl = document.getElementById("answer-buttons");
var sectionEl = document.getElementById("quizSection");
var timer = 75;
var randQuestions, currentQuestionIndex;

function startQuiz() {
    prepareQuiz.classList.add('hide')
    randQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizboxElement.classList.remove('hide')
    questionHopper()
}

function displayQuestion(question) {

}

function chooseAnswer() {

}

function questionHopper() {
    showQuestion(randQuestions[currentQuestionIndex])
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
    }

]

function completeQuiz() {
    timerEl.textContent = " ";

    var quizEnd = document.createElement("div");
    var qo = document.createElement("h1");

    quizEnd.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    qo.setAttribute("style", "margin:auto; width: 50%; text-align:center; color:red;");

    qo.textContent = "QUIZ IS OVER. THANKS FOR PLAYING!";

    quizEnd.appendChild(qo);

}

prepareQuiz.addEventListener("click", function() {
    var createTimer = setInterval(function () {
        // runs every second
        timer--;

        //if timer runs out
        if(timer === 0)
 {
     clearInterval(createTimer);
     completeQuiz();
 }    
// update the timer on page 
document.getElementById("timer").innerHTML = timer + " seconds";
    }, 1000); 
}); 


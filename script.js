var prepareQuiz = document.querySelector("#leggo");
var timerEl = document.getElementById("timer");
var timer = 75;

const randQuestions, currentQuestionIndex

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

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
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
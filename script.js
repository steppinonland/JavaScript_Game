var prepareQuiz = document.querySelector("#leggo");
var timerEl = document.getElementById("timer");
var timer = 75;  

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
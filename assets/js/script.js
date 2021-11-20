var startButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-count");
var timeLeft = 10;

function timer(){
    
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image\\
        alert("Game over!");
        }

    }, 1000);
}

startButton.addEventListener("click", timer);

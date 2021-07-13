const secretNum = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    let guessNum = Number(document.querySelector('.guess').value);

    if (!guessNum) {//not entered a number
        document.querySelector('.message').textContent = "Please guess a number!";
    } else if (guessNum === secretNum) {//correct guess
        document.querySelector('.message').textContent = "Correct guess!";
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "25rem";
        if (currentScore > highScore) {
            highScore = currentScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guessNum < secretNum) {//less than a secret number
        if (currentScore > 1) {
            document.querySelector('.message').textContent = "Too Low!";
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "You lost the match!";
        }
    } else if (guessNum > secretNum) {//more than a secret number
        if (currentScore > 1) {
            document.querySelector('.message').textContent = "Too High!";
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "You lost the match!";
        }
    }

});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "black";
    currentScore = 20;
});


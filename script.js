let secretNum = Math.trunc(Math.random() * 20) + 1;
let currentScore = 5;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    let guessNum = Number(document.querySelector('.guess').value);

    if (!guessNum) {//not entered a number
        document.querySelector('.message').textContent = "😕 Please guess a number!";
    } else if (guessNum > 20 || guessNum < 0) {
        document.querySelector('.message').textContent = "🚫 Number Should be between 1 and 20";
    } else if (guessNum === secretNum) {//correct guess
        document.querySelector('.message').textContent = "✔️ Correct guess!";
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('.message').style.color = "#047857";
        document.querySelector('.number').style.color = "#047857";
        document.querySelector('.number').style.fontSize = "3rem";
        document.querySelector('.check').disabled = true;
        document.querySelector('.check').style.backgroundColor = "grey";
        if (currentScore > highScore) {
            highScore = currentScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guessNum < secretNum) {//less than a secret number
        if (currentScore > 1) {
            document.querySelector('.message').textContent = "⛵ Too Low!";
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "😑 You lost the match!";
            document.querySelector('.check').disabled = true;
            document.querySelector('.check').style.backgroundColor = "grey";
        }
    } else if (guessNum > secretNum) {//more than a secret number
        if (currentScore > 1) {
            document.querySelector('.message').textContent = "✈️ Too High!";
            currentScore--;
            document.querySelector('.score').textContent = currentScore;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "😑 You lost the match!";
            document.querySelector('.check').disabled = true;
            document.querySelector('.check').style.backgroundColor = "grey";
        }
    }

});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = 5;
    document.querySelector('.message').textContent = "💡 Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "black";
    currentScore = 5;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.check').disabled = false;
    document.querySelector('.check').style.backgroundColor = "black";
});


'use strict';
// Document is the orm of HTML page, main entry point of Javascript to access DOM (Document Object Model) or simply structured form of HTML, automatically created by browser.
//DOM is a full representation of HTML document & we can use DOM methods and properties to manipulate the same.
// these DOM methods & properties comes under WEB API (Libraries that browsers implement) and JAVASCRIPT can interact with them. API - application programming interface.
// Web Apis are libraries also written in Javascript language.
// There is a official DOM specification so all browser behaves same.
// Thera are tons of more WEB APIs: -
// Timers , Fetch and more....
// DRY principle - Dont Repeat Yourselves Principle


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}
const displayScore = (score) => {
    document.querySelector('.score').textContent = score;
}

const displayHighScore = (highscore) => {
    document.querySelector('.highscore').textContent = highscore;
}

// const displayScore = (score) => {
//     document.querySelector('.score').textContent = score;
// }

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // if there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');
        // if player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            displayHighScore(highscore);
        }
        document.querySelector('.number').style.width = '30rem';
        // if guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            score--;
            displayScore(score);
        } else {
            displayMessage('💥 You lost the Game!');
            displayScore('0');
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})
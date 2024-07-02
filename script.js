'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let numberArea = document.querySelector('.number');
let scoreArea = document.querySelector('.score');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //cm When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    //cm When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberArea.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    numberArea.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //cm When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreArea.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreArea.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreArea.textContent = score;
  numberArea.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  numberArea.style.width = '15rem';
});

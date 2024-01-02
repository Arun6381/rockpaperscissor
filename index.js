
const buttons = document.querySelectorAll('.buttons button');
const resultText = document.getElementById('result');
const userScoreText = document.getElementById('user-score');
const computerScoreText = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    
    updateScores(result);
    displayResult(userChoice, computerChoice, result);
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    userScore++;
    return 'You won!';
  } else {
    computerScore++;
    return 'Computer won!';
  }
}

function updateScores(result) {
  userScoreText.textContent = userScore;
  computerScoreText.textContent = computerScore;
}

function displayResult(userChoice, computerChoice, result) {
  resultText.innerHTML = `You chose ${capitalizeFirstLetter(userChoice)}.<br>
    Computer chose ${capitalizeFirstLetter(computerChoice)}.<br>${result}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

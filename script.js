function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        alert('Computer choice is '+ computerChoice+'. You lose');
        computerScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        alert('Computer choice is '+ computerChoice+'. You win');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        alert('Computer choice is '+ computerChoice+'. You lose');
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        alert('Computer choice is '+ computerChoice+'. You win');
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        alert('Computer choice is '+ computerChoice+'. You lose');
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        alert('Computer choice is '+ computerChoice+'. You win');
        humanScore++;
    } else {
        alert('Its draw. You both choice ' + computerChoice);
    }

    const container = document.querySelector('#container');
    container.textContent = `Human: ${humanScore} : ${computerScore} Computer`;

    const winContainer = document.querySelector('#winContainer')

    if (computerScore === 3) {
        winContainer.textContent = 'Computer WIN';
    } else if (humanScore == 3) {
        winContainer.textContent = 'Human WIN';
    }
}

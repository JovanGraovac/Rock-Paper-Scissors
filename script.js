function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice () {

    let humanInput = prompt("Enter your choice. Rock, Paper or Scissors")
    let toLowHumanInput = humanInput.toLowerCase()
    
    if (toLowHumanInput != 'rock' && toLowHumanInput != 'paper' && toLowHumanInput != 'scissors') {
        alert('Your choice is wrong. Enter again');
         return getHumanChoice ()
    }
    
    if (toLowHumanInput == 'rock') {
        return 'rock'
    } else if (toLowHumanInput == 'paper') {
        return 'paper';
    } else if (toLowHumanInput == 'scissors') {
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
}

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Human Score is ${humanScore}`);
    console.log(`Computer Score is ${computerScore}`)





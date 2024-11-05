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

    let humanChoice = prompt("Enter your choice. Rock, Paper or Scissors")
    
    if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
        alert('Your choice is wrong. Enter again');
         return getHumanChoice ()
    }
    
    if (humanChoice == 'rock') {
        return 'rock'
    } else if (humanChoice == 'paper') {
        return 'paper';
    } else if (humanChoice == 'scissors') {
        return 'scissors';
    }
    
}

console.log(getHumanChoice())



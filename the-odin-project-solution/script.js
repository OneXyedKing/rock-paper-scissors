/*
A game where the user and computer go against each other for five rounds.
    Make computer generate random rock, paper, scissors
        Generate random number
        Assign option to number
    Get user input
    Compare computer vs. human
        Computer vs. human
        Score who wins
    Score who wins the round
        Take cumulated score
        Reflect winner


*/

// Initialise scorekeeping
let humanScore = 0;
let computerScore = 0;
let computerWin = 'The computer wins.'
let humanWin = 'The human wins.'
let bothDraw = 'The human and computer draw.'
let roundCount = 0;

// Generate computer choice based on random math value
function getComputerChoice() {
    
    // Create Variable to store random
    console.log(`Start of getComputerChoice()`);
    
    //Generate Random Number
    let math = Math.random();
    let computerChoice;

    console.log(math);

    // Assign Option to random number
    if (math <= 0.33333333) {
        computerChoice = 'rock';
    } else if (math < 0.66666666) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log(`Computer: ${computerChoice}.`);
    console.log(`End of getComputerChoice()`);
    return computerChoice;
}


// Get human input of choice
function getHumanChoice () {
    console.log(`Start of getHumanChoice()`);
    let humanChoice = prompt('Please pick Rock, Paper, or Scissors.').toLowerCase().trim();
    console.log(`Human: ${humanChoice}.`);
    console.log(`End of getHumanChoice()`);
    return humanChoice;
}


// Compare human's choice to computer's choice
function playRound(humanChoice, computerChoice) {
    
    console.log(`Start of playRound`);
    
    switch (humanChoice) {
            
        //user chooses rock vs. ...
        case 'rock': 
            
            switch (computerChoice) {
        
                // rock v rock = draw
                case 'rock':
                    console.log(bothDraw);
                    break;
        
                    // rock v paper = Console win
                case 'paper':
                    computerScore += 1;
                    console.log(computerWin);
                    break;
        
                    // rock v scissors = you win
                case 'scissors':
                    humanScore += 1;
                    console.log(humanWin);
                    break;
            }
            break;
        
        //user chooses paper vs...    
        case 'paper':
            
            switch (computerChoice) {
        
                // paper v rock = human win
                case 'rock':
                    humanScore += 1;
                    console.log(humanWin);
                    break;
        
                // paper v paper = we draw
                case 'paper':
                    console.log(bothDraw);
                    break;
        
                // paper v scissors = console win
                case 'scissors':
                    computerScore += 1;
                    console.log(computerWin);
                    break;
            }
            break;
        
        //user chooses scissors vs. ..
        case 'scissors':
            
            switch (computerChoice) {
        
                // scissors v rock = computer wins
                case 'rock':
                    computerScore += 1;
                    console.log(computerWin);
                    break;
        
                // scissors v paper = user wins
                case 'paper':
                    humanScore += 1;
                    console.log(humanScore);
                    break;
        
                // scissors v scissors = we draw
                case 'scissors':
                    console.log(bothDraw);
                    break;
            }
            break;
    }
            console.log(`End of playRound()`);
}



while (roundCount < 4) {

    roundCount += 1;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
    alert('Computer wins the game');
    console.log('Human wins the game')
} else if (computerScore > humanScore) {
    alert('Computer wins the game');
    console.log('Computer wins the game');
} else {
    alert('Computer and Human draws the game.');
    console.log('Computer and Human draws the game.');
}

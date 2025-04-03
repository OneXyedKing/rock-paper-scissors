/*
Step 1:
Setup HTML and JS, check if works ==> Works


*/

// Initialise scorekeeping
let humanScore = 0;
let computerScore = 0;

// Generate computer choice based on random math value
function getComputerChoice() {
    // Create Variable to store random
    let math = Math.random();
    let computerChoice;

    console.log(math);

    // Generating console option
    if (math <= 0.33333333) {
        computerChoice = 'rock';
    } else if (math < 0.66666666) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissor';
    }

    console.log(computerChoice);
}

getComputerChoice();

function getHumanChoice () {
    let humanChoice = prompt('Please pick Rock, Paper, or Scissors.').toLowerCase().trim();
    console.log(humanChoice);
}

getHumanChoice();

function playRound(humanChoice, computerChoice) {
    
    switch (userChoice) {
            
        //user chooses rock vs. ...
        case 'rock': 
            
            switch (consoleChoice) {
        
                // rock v rock = draw
                case 'rock':
                    console.log(bothDraw);
                    break;
        
                    // rock v paper = Console win
                case 'paper':
                    consoleScore += 1;
                    console.log(consoleWin);
                    break;
        
                    // rock v scissor = you win
                case 'scissor':
                    humanScore += 1;
                    console.log(humanWin);
                    break;
            }
            break;
        
        //user chooses paper vs...    
        case 'paper':
            
            switch (consoleChoice) {
        
                // paper v rock = human win
                case 'rock':
                    humanScore += 1;
                    console.log(humanWin);
                    break;
        
                // paper v paper = we draw
                case 'paper':
                    console.log(bothDraw);
                    break;
        
                // paper v scissor = console win
                case 'scissor':
                    consoleScore += 1;
                    console.log(consoleWin);
                    break;
            }
            break;
        
        //user chooses scissor vs. ..
        case 'scissor':
            
            switch (consoleChoice) {
        
                // scissor v rock = draw
                case 'rock':
                    consoleScore += 1;
                    console.log(consoleWin);
                    break;
        
                // scissor v paper = you win
                case 'paper':
                    humanScore += 1;
                    console.log(humanScore);
                    break;
        
                // scissor v scissor = we draw
                case 'scissor':
                    console.log(bothDraw);
                    break;
            }
            break;
            }
}
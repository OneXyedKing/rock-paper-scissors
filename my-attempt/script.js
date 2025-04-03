/*
Brief:
The console should play rock, paper, scissors with the user
The user should input their selection between rock, paper, or scissors
The console should then generate rock, paper, or scissors randomly
The console should also evaluate who won (rock > paper, etc.)
Math.random() can be used to generate a random number
The console can use the random number to decide which option to choose

Five rounds should be played. 
Score should be kept
The winner declared at the end.

rock, paper, scissors
rock < scissors
paper < rock
scissors < paper

Pseudocode:

*/

let math = Math.random();
let choice = math;
let consoleChoice;
let humanScore = 0;
let consoleScore = 0;
let conclusion;
let roundCount = 0;
let i = 0;
let humanWin = `You win round ${roundCount}`;
let consoleWin = `I win round ${roundCount}`;
let bothDraw = `We draw round ${roundCount}`;




while (i<5) {
    i += 1;
    roundCount += 1;
    
    humanWin = `You win round ${roundCount}`;
    consoleWin = `I win round ${roundCount}`;
    bothDraw = `We draw round ${roundCount}`;

    //Get user choice
    let userChoice = prompt('Please choose rock, paper, or scissor. What do you choose?').toLowerCase().trim();;
    
    //Confirm user choice
    console.log(`User chose ${userChoice}`);

    //Check correct input
    while (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissor' && userChoice != null) {
        alert(`${userChoice} is invalid. Please choose rock, paper, or scissor.`);
        userChoice = prompt('Please choose rock, paper, or scissor. What do you choose?').toLowerCase().trim();;
    }

    //Only run if input is correct
    if (userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissor') {
        
        math = Math.random();
        choice = math;

        //Inform math generation
        console.log(`Math generated: ${choice}.`); 
        
        // Generating console option
        if (choice <= 0.33333333) {
                consoleChoice = 'rock';
            } else if (choice < 0.66666666) {
                consoleChoice = 'paper';
            } else {
                consoleChoice = 'scissor';
            }

        console.log(`Console chose ${consoleChoice}.`);

        //Scoring
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
        
        console.log(`Human Score: ${humanScore}. Console Score: ${consoleScore}.`)
    } else if (userChoice == null) {
        console.log('Game Cancelled');
        alert('Game Cancelled.');
        break;
    } else {
        continue;
    }
}

//Execute After while loop
if (humanScore > consoleScore) {
    conclusion = 'You win';
} else if (consoleScore > humanScore) {
    conclusion = 'I win';
} else {
    conclusion = 'We draw';
}

console.log(conclusion);
alert(conclusion);
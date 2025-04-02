/*
Brief:
The console should play rock, paper, scissors with the user
The user should input their selection between rock, paper, or scissors
The console should then generate rock, paper, or scissors randomly
The console should also evaluate who won (rock > paper, etc.)
Math.random() can be used to generate a random number
The console can use the random number to decide which option to choose

rock, paper, scissors
rock < scissors
paper < rock
scissors < paper

Pseudocode:

*/

let userChoice = prompt('Please choose rock, paper, or scissor. What do you choose?');
let math = Math.random();
let choice = math;
let consoleChoice;
let outcome;
let human;
let console;
console.log(choice);

// Generating console option
if (choice <= 0.33333333) {
        consoleChoice = 'rock';
        console.log(`You chose ${userChoice}, I chose ${consoleChoice}.`);
    } else if (choice < 0.66666666) {
        consoleChoice = 'paper';
        console.log(`You chose ${userChoice}, I chose ${consoleChoice}.`);
    } else {
        consoleChoice = 'scissor';
        console.log(`You chose ${userChoice}, I chose ${consoleChoice}.`);
    }

switch (userChoice) {
    //user chooses rock vs. ...
    case 'rock': 
        
        switch (consoleChoice) {
    
            // rock v rock = draw
            case 'rock':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'we draw';
                //console.log
                alert(outcome);
                break;
    
                // rock v paper = I win
            case 'paper':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'I win';
                //console.log
                alert(outcome);
                break;
    
                // rock v scissor = you win
            case 'scissor':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'you win';
                //console.log
                alert(outcome);
                break;
        }
        break;
    
        //user chooses paper vs. ..
    
    case 'paper':
        
        switch (consoleChoice) {
    
        // paper v rock = you win
        case 'rock':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'you win';
                //console.log
                alert(outcome);
                break;
    
            // paper v paper = we draw
            case 'paper':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'we draw';
                //console.log
                alert(outcome);
                break;
    
            // paper v scissor = you win
            case 'scissor':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'I win';
                //console.log
                alert(outcome);
                break;
        }
        break;
    //user chooses scissor vs. ..
    
    case 'scissor':
        
        switch (consoleChoice) {
    
            // scissor v rock = draw
            case 'rock':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'I win';
                //console.log
                alert(outcome);
                break;
    
            // scissor v paper = you win
            case 'paper':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'you win';
                //console.log
                alert(outcome);
                break;
    
            // scissor v scissor = we draw
            case 'scissor':
                //console.log
                alert(`You chose ${userChoice}, I chose ${consoleChoice}.`);
                outcome = 'we draw';
                //console.log
                alert(outcome);
                break;
        }
        break;
        }


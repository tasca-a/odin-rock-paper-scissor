const moves = ["Rock", "Paper", "Scissor"];

/**
 * @returns the move selected randomly by the computer
 */
function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)];
}

/**
 * Generate a prompt asking the user to input a move.
 * The answer can be "rock", "paper" or "scissor" case insensitive.
 * @returns the move selected by the player
 */
function getPlayerChoice(){
    while (true){
        let choice = prompt("Enter your incredible anc totally unexpected Rock, Paper, Scissor move").toLowerCase();

        switch(choice){
            case "rock": return moves[0] ;break;
            case "paper": return moves[1]; break;
            case "scissor": return moves[2]; break;
            default: break;
        }
    }
}

/**
 * Check if the player won against the computer move.
 * @param {String} playerMove 
 * @param {String} computerMove 
 * @returns a string saying if the player won, loose or tie the computer
 */
function checkWinner(playerMove, computerMove){
    let result = ""
    if (playerMove == "Rock")
        switch(computerMove){
            case "Rock": result = "Tie!"; break;
            case "Paper": result = "You freaking LOOSER!"; break;
            case "Scissor": result = "You DESTROYED that stupid computer!"; break;
        }
    if (playerMove == "Paper")
        switch(computerMove){
            case "Rock": result = "You DESTROYED that stupid computer!"; break;
            case "Paper": result = "Tie!"; break;
            case "Scissor": result = "You freaking LOOSER!"; break;
        }
    if (playerMove == "Scissor")
        switch(computerMove){
            case "Rock": result = "You freaking LOOSER!"; break;
            case "Paper": result = "You DESTROYED that stupid computer!"; break;
            case "Scissor": result = "Tie!"; break;
        }

    return result;
}

alert(checkWinner(getPlayerChoice(), getComputerChoice()));
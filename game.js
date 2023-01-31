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
        let choice = prompt("Enter your incredible and totally unexpected Rock, Paper, Scissor move").toLowerCase();

        switch(choice){
            case "rock": return moves[0] ;break;
            case "paper": return moves[1]; break;
            case "scissor": return moves[2]; break;
            default: break;
        }
    }
}

/**
 * Check if who won the game.
 * @param {String} playerMove 
 * @param {String} computerMove 
 * @returns a string in which is contained the player who won
 */
function checkWinner(playerMove, computerMove){
    let result = ""

    switch(playerMove){
        case "Rock": {
            switch(computerMove){
                case "Paper": result = "computer"; break;
                case "Scissor": result = "player"; break;
                default: result = "tie"; break;
            }
        }; break;
        case "Paper": {
            switch(computerMove){
                case "Scissor": result = "computer"; break;
                case "Rock": result = "player"; break;
                default: result = "tie"; break;
            }
        }; break;
        case "Scissor": {
            switch(computerMove){
                case "Rock": result = "computer"; break;
                case "Paper": result = "player"; break;
                default: result = "tie"; break;
            }
        }; break;
    }

    return result;
}

/**
 * Create and returns a message to the player based on his status at the end of a game.
 * 
 * @param {String} winner who won the game
 * @returns a message to the player
 */
function messageToPlayer(winner){
    let message = "";

    switch(winner){
        case "player": message = "You DESTROYED that stupid computer!"; break;
        case "computer": message = "You freaking LOOSER!"; break;
        default: message = "Tie!"; break;
    }

    return message;
}
// TODO: Serious debugging
function game(){
    const numberOfGames = 5;

    let playerMoves = Array(numberOfGames);
    let computerMoves = Array(numberOfGames);

    let playerScore = 0;
    let computerScore = 0;

    for (let game = 1; game <= numberOfGames; game++){

        playerMoves[game-1] = getPlayerChoice();
        computerMoves[game-1] = getComputerChoice();

        let winner = checkWinner(playerMoves[game-1], computerMoves[game-1]);

        if (winner == "player")
            playerScore++;
        if (winner == "computer")
            computerScore++;

        alert(`
        ${messageToPlayer(winner)}

        You played: ${playerMoves[game-1]}
        The computer played: ${computerMoves[game-1]}
        `);
    }

    alert(`
    Game finished!

    Player score: ${playerScore}
    Computer score: ${computerScore}

    Player moves: ${playerMoves}
    Computer moves ${computerMoves}
    `)

}

game();
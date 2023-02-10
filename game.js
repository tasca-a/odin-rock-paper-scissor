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

const playerName = "Player"
const computerName = "Computer"

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
                case "Paper": result = computerName; break;
                case "Scissor": result = playerName; break;
                default: result = "tie"; break;
            }
        }; break;
        case "Paper": {
            switch(computerMove){
                case "Scissor": result = computerName; break;
                case "Rock": result = playerName; break;
                default: result = "tie"; break;
            }
        }; break;
        case "Scissor": {
            switch(computerMove){
                case "Rock": result = computerName; break;
                case "Paper": result = playerName; break;
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

function guiGame(){
    const maxScore = 5;

    let playerScore = 0;
    let computerScore = 0;

    let playerButtons = document.querySelectorAll(".moves-container.player button");
    playerButtons.forEach((button) => {
        button.addEventListener("click", () =>{
            // Get the moves
            let playerMove = button.textContent;
            let computerMove = getComputerChoice();

            // Get the winner
            let winner = checkWinner(playerMove, computerMove);

            // Increment score
            if (winner == playerName)
                playerScore++;
            if (winner == computerName)
                computerScore++;

            // Show the winner message
            let winnerMessage = document.getElementById("winner-message");
            if (winner == "tie")
                winnerMessage.textContent = `Tie!`;
            else
                winnerMessage.textContent = `${winner} win!`;

            // Create and show a score entry
            let scoreEntry = document.createElement("p");
            scoreEntry.className = "score";
            scoreEntry.textContent = `${playerScore} - ${computerScore}`;

            let scoreContainer = document.getElementsByClassName("score-container").item(0);
            scoreContainer.append(scoreEntry);

            // Check game over
            if (playerScore >= 5 || computerScore >= 5){
                playerButtons.forEach((button) => {button.disabled = true});
            }
        })
    })

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
        // Reset game score
        playerScore = 0;
        computerScore = 0;

        // Remove all score items
        let scoreItems = document.querySelectorAll(".score");
        scoreItems.forEach((scoreElement) => {
            scoreElement.remove();
        })

        // Enable the player buttons
        playerButtons.forEach((button) => {button.disabled = false});

        // Remove winning message
        let winnerMessage = document.getElementById("winner-message");
        winnerMessage.textContent = "";
    })
}

guiGame();
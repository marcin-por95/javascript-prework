let playerScore = 0;
let computerScore = 0;

function playGame(playerInput){ // playerInput = 1

    function getMoveName(argMoveId){ // argMoveId = 2
        if(argMoveId == 1){
            return 'rock';
        }
        else if (argMoveId == 2){
            return 'paper';
        }
        else if (argMoveId == 3){
            return 'scissors';
        }
    }

    function displayResult(argComputerMove, argPlayerMove){
        console.log('wywołano displayResult');
        printMessage('Computer choose ' + argComputerMove + ', and player choose ' + argPlayerMove);
        if((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argPlayerMove == 'scissors' && argComputerMove == 'paper') || (argPlayerMove == 'rock' && argComputerMove == 'scissors')){
            printMessage('Player win this round.');
            playerScore = playerScore + 1;
        }
        else if( argComputerMove == argPlayerMove) {
            printMessage("'It's a draw !");
        }
        else {
            printMessage('Computer win this round.');
            computerScore = computerScore + 1;
        }
        console.log(playerScore, computerScore);
        printMessage(playerScore + " : " + computerScore);
    }
    
    clearMessages();

    let argPlayerMove = getMoveName(playerInput); // 1 -> 'rock'

    //randomize 
    let randomNumber = Math.floor(Math.random() * 3 + 1); // 2
    let argComputerMove = getMoveName(randomNumber); // 2 -> 'paper'

    displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);;
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);;
});


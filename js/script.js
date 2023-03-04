function playGame(){
    clearMessages();

    let argPlayerMove = (getMoveName);
    /*
    playerInput
    */
//randomize 
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('The drawn number is : ' + randomNumber);
//Computer move
let argComputerMove = getMoveName(randomNumber);
//Player move
/*
let playerInput = prompt('Make your move !  1 = Rock  2 = Paper  3 = Scissors.');

console.log('Player number is: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
*/
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'rock';
    }
    else if (argMoveId == 2){
        return 'paper';
    }
    else if (argMoveId == 3){
        return 'scissors';
    }
    else {
        return 'unknown move';
    }
}
console.log(argComputerMove);
console.log(argPlayerMove);

 function displayResult(argComputerMove, argPlayerMove){
     console.log('wywołano displayResult');
     printMessage('Computer choose ' + argComputerMove + ', and player choose ' + argPlayerMove);
     if( argComputerMove == 'rock' && argPlayerMove == 'paper' + argComputerMove == 'paper' && argPlayerMove == 'scissors' + argComputerMove == 'scissors' && argPlayerMove == 'rock'){
         printMessage('Player win this round.');
     }
     else if( argComputerMove == 'rock' && argPlayerMove =='rock'){
         printMessage("'It's a draw !");
     }
     else if(argPlayerMove == 'unknown move'){
         printMessage('Unknown player move');
     }
     else {
         printMessage('Computer win this round.');
     }
 }
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
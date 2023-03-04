
//randomize 
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('The drawn number is : ' + randomNumber);
//Computer move
let argComputerMove = getMoveName(randomNumber);
//Player move
let playerInput = prompt('Make your move !  1 = Rock  2 = Paper  3 = Scissors.');
console.log('Player number is: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

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
  /*
  // PLAYER MOVE SCRIPT -----------------------------------------------------------
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = 'nieznany ruch';

  if(playerInput == '1'){
    playerMove = 'rock';
  }
  if(playerInput == '2'){
    playerMove = 'paper';
  }
  if(playerInput == '3'){
    playerMove = 'scizzors';
  }

  printMessage('Your move is: ' + playerMove);

  if(randomNumber == playerInput);
  printMessage('Game score is: Remis');
 console.log('Wylosowana liczba to: ' + randomNumber);
 
/*

 let computerMove = 'unknown move';

 // COMPUTER MOVE SCRIPT ---------------------------------------------------------
 if (randomNumber == 1) {

     computerMove = 'rock';
 }
 else if (randomNumber == 2) {
     computerMove = 'paper';

 }
 else if (randomNumber == 3) {
     computerMove = 'scizzors';

 }

 console.log('Move computer is: ' + computerMove);
 printMessage('Move computer is: ' + computerMove);
 // PLAYER MOVE SCRIPT -----------------------------------------------------------
 let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

 console.log('Gracz wpisał: ' + playerInput);

 let playerMove = 'Unknown move';

 if (playerInput == '1') {
     playerMove = 'rock';
 }
 if (playerInput == '2') {
     playerMove = 'paper';
 }
 if (playerInput == '3') {
     playerMove = 'scizzors';
 }
 printMessage('Your move is: ' + playerMove);

 //Game score -------------------------------------------------------------------------
 if (computerMove == 'paper' && playerMove == 'rock') {
     printMessage('Computer WIN!');
 }
 if (computerMove == 'scizzors' && playerMove == 'paper') {
     printMessage('Computer WIN!');
 }
 if (computerMove == 'rock' && playerMove == 'scizzors') {
     printMessage('Computer WIN!');
 }
 //player score ------------------------------------------------------------------------
 if (computerMove == 'paper' && playerMove == 'scizzors') {
     printMessage('You WIN!');
 }
 if (computerMove == 'scizzors' && playerMove == 'rock') {
     printMessage('You WIN!');
 }
 if (computerMove == 'rock' && playerMove == 'paper') {
     printMessage('You WIN!');
 }

 if (computerMove == playerMove) {
     printMessage('Remis!');
 }
 if (playerInput == playerMove) {
     printMessage('Unknown move!');
 }
 */
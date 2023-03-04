let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


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
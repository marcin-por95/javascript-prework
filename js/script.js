let randomNumber = Math.floor(Math.random() * 3 + 1);

 console.log('Wylosowana liczba to: ' + randomNumber);


 let computerMove = 'nieznany ruch';
 
 // COMPUTER MOVE SCRIPT ---------------------------------------------------------
 if(randomNumber == 1){
   
   computerMove = 'rock';
 }
   else if (randomNumber == 2){
     computerMove = 'paper';
     
   }
   else if (randomNumber == 3){
     computerMove = 'scizzors';
    
   }

 console.log('move computer is: ' + computerMove);
 printMessage('move computer is: ' + computerMove);
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

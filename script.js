let player_score = 0;
let computer_score = 0;
let round_number = 1;

const weapons = {
  rock: {weakTo: 'paper', strongTo: 'scissors'},
  paper: {weakTo: 'scissors', strongTo: 'rock'},
  scissors: {weakTo: 'rock', strongTo: 'paper'}
}
const paragraph = document.querySelector('#paragraph');
const pscore = document.querySelector('#score');
const winner = document.querySelector('#winner');

function game(){}
  const figures = document.querySelectorAll('.player');
  figures.forEach((figure) => figure.addEventListener('click',function(){compare(this.dataset.figure,getComputerChoice())}));
  


 /* let ComputerChoice=getComputerChoice().toLowerCase();
  let PlayerChoice=getPlayerChoice().toLowerCase();
  console.log(ComputerChoice);
  */
  //ompare(PlayerChoice,ComputerChoice);

function getPlayerChoice(){

  round_number+=1;
  if(PlayerChoice != "rock" && PlayerChoice != "paper" && PlayerChoice != "scissors"){
    PlayerChoice=null;
    alert("Invalid choice!");
    return;
  }
  return PlayerChoice;
}


function getComputerChoice()
{
    let ComputerChoice = getRandomInt(3);
    //console.log(ComputerChoice)
    switch(ComputerChoice){
      case 0:ComputerChoice="rock";
        break;

      case 1:ComputerChoice="paper";
        break;

      case 2:ComputerChoice="scissors";
        break;
    }
    return(ComputerChoice);

}

function compare(PlayerChoice,ComputerChoice){
  if (weapons[PlayerChoice].strongTo === ComputerChoice){
    player_score+=1;
    pscore.textContent = player_score;
    if (player_score==5){
      winner.textContent = "You won!";
    }
    console.log('player won');
    
    return;
  }

  if (weapons[PlayerChoice].weakTo === ComputerChoice){
    computer_score+=1;
    if (computer_score==5){
      winner.textContent = "Computer won!";
    }
    console.log('computer won');
    return;
  }
  if (PlayerChoice === ComputerChoice){
    
    console.log('tie');
    return;
  }

  return;
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//game();

//console.log(`Game finished, Player score = ${player_score}, Computer score = ${computer_score}`);
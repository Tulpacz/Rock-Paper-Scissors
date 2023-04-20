let player_score = 0;
let computer_score = 0;
let round_number = 1;

const weapons = {
  rock: {weakTo: 'paper', strongTo: 'scissors'},
  paper: {weakTo: 'scissors', strongTo: 'rock'},
  scissors: {weakTo: 'rock', strongTo: 'paper'}
}

function game(){
  let ComputerChoice=getComputerChoice().toLowerCase();
  let PlayerChoice=getPlayerChoice().toLowerCase();
  console.log(ComputerChoice);
  compare(PlayerChoice,ComputerChoice);
}
function getPlayerChoice(){
  let PlayerChoice=prompt("ROUND "+round_number+": Type in your choice - Rock, Paper or Scissors:");
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
    console.log(ComputerChoice)
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
    return;
  }

  if (weapons[PlayerChoice].weakTo === ComputerChoice){
    computer_score+=1;
    return;
  }

  return;
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


game();
game();
game();
game();
game();
console.log(`Game finished, Player score = ${player_score}, Computer score = ${computer_score}`);
// Assignment 4 - Rock, Paper or Scissors Game

const choices = [`rock`, `paper`, `scissors`];

function computerPlay(){
  const compChoice = choices[
    Math.floor(Math.random() * choices.length)];
  return compChoice;
}

function check(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return `Tie`;
  }else if(
    (playerSelection == `rock` && computerSelection == `scissors`) ||
    (playerSelection == `paper` && computerSelection == `rock`) ||
    (playerSelection == `scissors` && computerSelection == `paper`)
  ){
    return `Player`;
  }else{
    return `Computer`;
  }
}

function playRound(playerSelection, computerSelection){
  const result = check(playerSelection, computerSelection)
  if(result == `Tie`){
    return `The round ended in a tie.`
  } else if(result == `Player`){
    return `You Won! ${playerSelection} beats ${computerSelection}.`
  }else{
    return `You Lose! ${computerSelection} beats ${playerSelection}.`
  }
}

function playerChoice(){
  let validChoice = false;
  while(validChoice == false){
    const playerChoice = prompt(`Please, choose rock, paper or scissors`);
    if(playerChoice == null){
      continue;
    }
    const lowerCaseChoice = playerChoice.toLowerCase();
    if(choices.includes(lowerCaseChoice)){
      validChoice = true;
      return lowerCaseChoice
    }
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))
    if(check(playerSelection, computerSelection) == `Player`){
      playerScore++
    }else if (check(playerSelection, computerSelection) == `Computer`){
      computerScore++
    }
  }
  console.log(`___________________________________`)
  if(playerScore > computerScore){
    console.log(`Game over. Player was the winner! Congratulations!`);
  } else if(playerScore < computerScore){
    console.log(`Game over. Computer was the winner!`);
  } else {
    console.log(`Nobody won. The game was a tie.`);
  }
}
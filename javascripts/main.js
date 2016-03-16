var display = document.getElementById('feedback');

function draw(){display.innerHTML = "It's a Draw pardner"}
function scissorsWin(){display.innerHTML = "Edward Scissorhands is great at cutting womens hair and Paper. Good job!"}
function rockWin(){display.innerHTML = 'You smashed Edwards Scissory Hands. Way to go WINNER!!!'}
function scissorsLose(){display.innerHTML = 'Edward Scissorhands just cut a b*tch and cut yo paper!!! You Lose!!!'}
function paperWin(){display.innerHTML = "You smelled what the Rock was cooking and TP'd him, good job!!!"}
function rockLose(){display.innerHTML = "Dwayne Johnson just smashed your scissors. I'm sorry!!!"}
function paperLose(){display.innerHTML = "Toilet Paper covers Dwayne Johnson, sorry!!!"}


function playerChoice(x){
  var playerChoice = x
  var cc = compChoice();
  result(playerChoice,cc);
}

function compChoice() {
  var options = ['Rock', 'Paper', 'Scissors'];
	return options[Math.floor(Math.random() * options.length)];
}

function result(playerChoice, compChoice ){
  if (playerChoice == 'Rock' && compChoice == 'Rock'){draw();}
  else if (playerChoice == 'Scissors' && compChoice == 'Scissors')
  draw();
  else if (playerChoice == 'Paper' && compChoice == 'Paper')
  draw();
  else if (playerChoice == 'Rock' && compChoice == 'Paper')
  paperLose();
  else if (playerChoice == 'Rock' && compChoice == 'Scissors')
  rockWin();
  else if (playerChoice == 'Paper' && compChoice == 'Scissors')
  scissorsLose();
  else if (playerChoice == 'Paper' && compChoice == 'Rock')
  paperWin();
  else if (playerChoice == 'Scissors' && compChoice == 'Rock')
  rockLose();
  else
  scissorsWin();
  }

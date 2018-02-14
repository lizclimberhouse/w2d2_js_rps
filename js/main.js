console.log("this JS is working")


var user = document.getElementById('user')
var comp = document.getElementById('comp')
var result = document.getElementById('result')
var compArr = ["rock", "paper", "scissors"]
var win_loose 



function startGame(e) {
  // console.log(e.target.id)
  var userChoice = e.target.id
  // var compChoice = compArr[Math.floor(Math.random() * compArray.length)] // Couldn't get this to work
  var compChoice = Math.random();
    if (compChoice < 0.5) {
      compChoice = "rock"
    }
    else if (compChoice > 0.34 && compChoice < 0.66) {
      compChoice = "paper"
    }
    else {
      compChoice = "scissors"
    }
  // console.log(compChoice)
  user.innerHTML = userChoice
  comp.innerHTML = compChoice
  assess(userChoice, compChoice)
}

function assess(userChoice, compChoice) {
  if  (userChoice === compChoice) {
    win_loose = "You Tied"
  }
  else if (userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock" ) {
    win_loose = "You Loose"
  }
  else {
    win_loose = "You Win!"
  }
  // console.log(win_loose)
  result.innerHTML = win_loose
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}






// debugger //binding.pry DO NOT LEAVE debuggers in code. It will only work in the console, but dont leave it all the same.



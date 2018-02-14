console.log("this JS is working")


var user = document.getElementById('user')
var comp = document.getElementById('comp')

var compArr = ["rock", "paper", "scissors"]

function startGame(e) {
  console.log(e.target.id)
  var userChoice = e.target.id
  // var compChoice = compArr[Math.floor(Math.random() * compArray.length)]
  var compChoice = Math.random(1);
  if (compChoice < 0.5) {
    compChoice = "rock"
  }
  else if (compChoice > 0.34 && compChoice < 0.66) {
    compChoice = "paper"
  }
  else {
    compChoice = "scissors"
  }
  console.log(compChoice)
  // var compChoice = compArray[compIndex]
  // var compChoice = rand(string of 3)
  // var compChoice
  user.innerHTML = userChoice
  comp.innerHTML = compChoice
  asses(userChoice, compChoice)
}

// function assess(a, b) {
//   if  ===
//     print out win or loose
//     psuh onto array tally how may times won
//   else if  ||
//   else if ||
//   else

// }

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}






// debugger //binding.pry DO NOT LEAVE debuggers in code. It will only work in the console, but dont leave it all the same.



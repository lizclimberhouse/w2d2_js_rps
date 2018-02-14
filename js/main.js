console.log("this JS is working")
// #TODO - the percecnts don't work and I can't figure out how to fix them

var user = document.getElementById('user')
var comp = document.getElementById('comp')
var result = document.getElementById('result')
var compArr = ["rock", "paper", "scissors"]
var win_loose 
var times_won = document.getElementById('won')
var won = 0
var times_lost = document.getElementById('lost')
var lost = 0
var times_tied = document.getElementById('tied')
var tied = 0
var games = 0
var won_per = document.getElementById('per_won')
var per_won = 0
var lost_per = document.getElementById('per_lost')
var per_lost = 0
var tied_per = document.getElementById('per_tied')
var per_tied = 0

function startGame(e) {
  // console.log(e.target.id)
  var userChoice = e.target.id
  // var compChoice = compArr[Math.floor(Math.random() * compArray.length)] // Couldn't get this to work
  var compChoice = Math.random(1);
    if (compChoice < 0.33) {
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
    tied += 1
    games += 1
    times_tied.innerHTML = tied
    per_tied = Math.round((tied/games) * 100) + '%'
    // console.log(per)
    tied_per.innerHTML = per_tied
  }
  else if (userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock" ) {
    win_loose = "You Loose"
    lost += 1
    games += 1
    times_lost.innerHTML = lost
    per_lost = Math.round((lost/games) * 100) + '%'
    // console.log(per)
    lost_per.innerHTML = per_lost
  }
  else {
    win_loose = "You Win!"
    won += 1
    games += 1
    times_won.innerHTML = won
    per_won = Math.round((won/games) * 100) + '%'
    // console.log(per)
    won_per.innerHTML = per_won
  }
  // console.log(win_loose)
  result.innerHTML = win_loose

}

var clearPage =  document.getElementById('clear_btn')
  clear_btn.addEventListener('click', function() {
    compChoice = ""
    userChoice = ""
    user.innerHTML = userChoice
    comp.innerHTML = compChoice
    win_loose = ""
    result.innerHTML = win_loose
    tied = ""
    times_tied.innerHTML = tied
    lost = ""
    times_lost.innerHTML = lost
    won = ""
    times_won.innerHTML = won
    games = 0
    per_won = ""
    won_per.innerHTML = per_won
    per_lost = ""
    lost_per.innerHTML = per_lost
    tied_per = ""
    tied_per.innerHTML = per_tied
})

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}






// debugger //binding.pry DO NOT LEAVE debuggers in code. It will only work in the console, but dont leave it all the same.



"user strict";

let secretNumber = Math.trunc(Math.random() * 5) + 1;
console.log(`cheat: ${secretNumber}`);
let score = 3;

const btOne = document.querySelector(".one");
const btTwo = document.querySelector(".two");
const btThree = document.querySelector(".three");
const btFour = document.querySelector(".four");
const btFive = document.querySelector(".five");
const message = document.querySelector(".message");
const lifeReamining = document.querySelector(".score");
let number = document.querySelector(".number");
const hideAllbut = document.querySelector(".allbuttons");
const revealbut = document.querySelector(".playagain");
const winLose = document.querySelector(".winlosemsg");

btOne.textContent = Number(1);
btTwo.textContent = Number(2);
btThree.textContent = Number(3);
btFour.textContent = Number(4);
btFive.textContent = Number(5);

btOne.addEventListener("click", function () {
  if (btOne.textContent != secretNumber) {
    message.textContent = "Wrong Guess!  Try Again";
    message.style.color = "#ff0000";
    btOne.style.backgroundColor = "#ff0000";
    score--;
    lifeReamining.textContent = score;
    if (score < 1) {
      message.textContent = "GAME OVER";
      lifeReamining.textContent = "0";
      hideAllbut.classList.toggle("hidden");
      revealbut.classList.toggle("hidden");
      number.textContent = secretNumber;
      winLose.textContent = "OH SORRY! 😭 YOU LOSE!";
    }
  } else {
    number.textContent = secretNumber;
    message.textContent = "Correct Guess!";
    message.style.color = "#00ff1a";
    btOne.style.backgroundColor = "#60b347";
    hideAllbut.classList.toggle("hidden");
    revealbut.classList.toggle("hidden");
    winLose.textContent = "CONGRATULATIONS!🎉 YOU WIN!";
  }
});

btTwo.addEventListener("click", function () {
  if (btTwo.textContent != secretNumber) {
    message.textContent = "Wrong Guess!  Try Again";
    message.style.color = "#ff0000";
    btTwo.style.backgroundColor = "#ff0000";
    score--;
    lifeReamining.textContent = score;
    if (score < 1) {
      message.textContent = "GAME OVER";
      lifeReamining.textContent = "0";
      hideAllbut.classList.toggle("hidden");
      revealbut.classList.toggle("hidden");
      number.textContent = secretNumber;
      winLose.textContent = "OH SORRY! 😭 YOU LOSE!";
    }
  } else {
    number.textContent = secretNumber;
    message.textContent = "Correct Guess!";
    message.style.color = "#00ff1a";
    btTwo.style.backgroundColor = "#60b347";
    hideAllbut.classList.toggle("hidden");
    revealbut.classList.toggle("hidden");
    //hide.classList.toggle("hidden");
    winLose.textContent = "CONGRATULATIONS!🎉 YOU WIN!";
  }
});

btThree.addEventListener("click", function () {
  if (btThree.textContent != secretNumber) {
    message.textContent = "Wrong Guess!  Try Again";
    message.style.color = "#ff0000";
    btThree.style.backgroundColor = "#ff0000";
    score--;
    lifeReamining.textContent = score;
    if (score < 1) {
      message.textContent = "GAME OVER";
      lifeReamining.textContent = "0";
      hideAllbut.classList.toggle("hidden");
      revealbut.classList.toggle("hidden");
      number.textContent = secretNumber;
      winLose.textContent = "OH SORRY! 😭 YOU LOSE!";
    }
  } else {
    number.textContent = secretNumber;
    message.textContent = "Correct Guess!";
    message.style.color = "#00ff1a";
    btThree.style.backgroundColor = "#60b347";
    hideAllbut.classList.toggle("hidden");
    revealbut.classList.toggle("hidden");
    //hide.classList.toggle("hidden");
    winLose.textContent = "CONGRATULATIONS!🎉 YOU WIN!";
  }
});

btFour.addEventListener("click", function () {
  if (btFour.textContent != secretNumber) {
    message.textContent = "Wrong Guess!  Try Again";
    message.style.color = "#ff0000";
    btFour.style.backgroundColor = "#ff0000";
    score--;
    lifeReamining.textContent = score;
    if (score < 1) {
      message.textContent = "GAME OVER";
      lifeReamining.textContent = "0";
      hideAllbut.classList.toggle("hidden");
      revealbut.classList.toggle("hidden");
      number.textContent = secretNumber;
      winLose.textContent = "OH SORRY! 😭 YOU LOSE!";
    }
  } else {
    number.textContent = secretNumber;
    message.textContent = "Correct Guess!";
    message.style.color = "#00ff1a";
    btFour.style.backgroundColor = "#60b347";
    hideAllbut.classList.toggle("hidden");
    revealbut.classList.toggle("hidden");
    // hide.classList.toggle("hidden");
    winLose.textContent = "CONGRATULATIONS!🎉 YOU WIN!";
  }
});

btFive.addEventListener("click", function () {
  if (btFive.textContent != secretNumber) {
    message.textContent = "Wrong Guess!  Try Again";
    message.style.color = "#ff0000";
    btFive.style.backgroundColor = "#ff0000";
    score--;
    lifeReamining.textContent = score;
    if (score < 1) {
      message.textContent = "GAME OVER";
      lifeReamining.textContent = "0";
      hideAllbut.classList.toggle("hidden");
      revealbut.classList.toggle("hidden");
      winLose.textContent = "OH SORRY! 😭 YOU LOSE!";
    }
  } else {
    number.textContent = secretNumber;
    message.textContent = "Correct Guess!";
    message.style.color = "#00ff1a";
    btFive.style.backgroundColor = "#60b347";
    hideAllbut.classList.toggle("hidden");
    revealbut.classList.toggle("hidden");
    //hide.classList.toggle("hidden");
    winLose.textContent = "CONGRATULATIONS!🎉 YOU WIN!";
  }
});

document.querySelector(".playagain").addEventListener("click", function () {
  window.location.reload();
});

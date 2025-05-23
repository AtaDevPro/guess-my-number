"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber, typeof secretNumber);

// document.querySelector(".number").textContent = secretNumber;
// console.log('AtaDevPro');

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ عدد را وارد کنید!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🏆 درست حدس زدی!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "23rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📉 بیا پایین!" : "📈 برو بالا!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 باختی که!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  score = 20;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "حدس بزن...";
  document.querySelector(".number").textContent = "؟";
  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "13rem";
  document.querySelector("body").style.backgroundColor = "#222";
});

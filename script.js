let second = 0;
let tens = 0;
let minute = 0;
let interval;
let getSeconds = document.querySelector(".second");
let getTens = document.querySelector(".tens");
let getMinutes = document.querySelector(".minute");

let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let btnReset = document.querySelector(".btnReset");

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = true;
  btnStart.innerHTML = "Continue";
});

btnReset.addEventListener("click", () => {
  tens = 0;
  second = 0;
  minute = 0;

  clearInterval(interval);
  isRunning = true;
  btnStart.innerHTML = "Start";

  getTens.innerHTML = "00";
  getSeconds.innerHTML = "00";
  getMinutes.innerHTML = "00";
  isRunning = true;
  btnStart.innerHTML = "Start";
});

function timer() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    second++;
    getSeconds.innerHTML = second < 10 ? "0" + second : second;
    tens = 0;
    getTens.innerHTML = "0" + tens;
  }
  if (second > 59) {
    minute++;
    getMinutes.innerHTML = minute < 10 ? "0" + minute : minute;
    second = 0;
    getSeconds.innerHTML = "00";
  }
  if (minute > 59) {
    minute = 0; // Reset minute to 0 if it exceeds 59
  }
}

// function timer() {
//   tens++;
//   if (tens <= 9) {
//     getTens.innerHTML = "0" + tens;
//   }
//   if (tens > 9) {
//     getTens.innerHTML = tens;
//   }
//   if (tens > 99) {
//     second++;
//     getSeconds.innerHTML = "0" + second;
//     tens = 0;
//     getTens.innerHTML = "0" + tens;
//   }
//   if (second > 9) {
//     getSeconds.innerHTML = second;
//   }}
//   if (second > 59) {
//     minute++;
//     if (minute <= 9) {
//       getMinutes.innerHTML = "0" + minute;
//     }
//     if (tens > 9) {
//       getMinutes.innerHTML = minute;
//     }
//   }

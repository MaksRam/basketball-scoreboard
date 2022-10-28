const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

const homeEl = document.getElementById("home-el");
const guestEl = document.getElementById("guest-el")
let my_int;
let isTimerStarted = false;

let homeScore = 0;
let guestScore = 0;

function plus(number, side) {
  if (side === "home") {
    if (homeScore < 100 - number) {
      homeScore += number;
      homeEl.textContent = homeScore;
    }
  } else {
    if (guestScore < 100 - number) {
      guestScore += number;
      guestEl.textContent = guestScore;
    }
  }
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

totalSeconds = 0;

function setTime(minutesLabel, secondsLabel) {
  totalSeconds++;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function set_timer() {
  if (secondsLabel.innerHTML === '00' && minutesLabel.innerHTML === '00') {
    isTimerStarted = true;
    my_int = setInterval(function () { setTime(minutesLabel, secondsLabel) }, 1000);
  }
}

function resume_timer() {
  if (!isTimerStarted) {
    isTimerStarted = true;
    my_int = setInterval(function () { setTime(minutesLabel, secondsLabel) }, 1000);
  }
}

function stop_timer() {
  isTimerStarted = false;
  clearInterval(my_int);
}

function reset_timer() {
  stop_timer()
  totalSeconds = 0;
  minutesLabel.innerHTML = "00";
  secondsLabel.innerHTML = "00";
}


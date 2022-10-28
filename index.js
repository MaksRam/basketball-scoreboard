const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

const homeEl = document.getElementById("home-el");
const guestEl = document.getElementById("guest-el")

let homeScore = 0;
let guestScore = 0;

function hplusone() {
  if(homeScore < 99) {
  homeScore += 1
  homeEl.textContent = homeScore}
  
}

function hplustwo() {
  if(homeScore < 98) {
  homeScore += 2
  homeEl.textContent = homeScore
  }
}

function hplusthree() {
  if(homeScore < 97) {
  homeScore += 3
  homeEl.textContent = homeScore
  }
}

function gplusone() {
  if(guestScore < 99) {
  guestScore += 1
  guestEl.textContent = guestScore
  }
}

function gplustwo() {
  if(guestScore < 98) {
  guestScore += 2
  guestEl.textContent = guestScore
  }
}

function gplusthree() {
  if(guestScore < 97) {
  guestScore += 3
  guestEl.textContent = guestScore
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
    my_int = setInterval(function () { setTime(minutesLabel, secondsLabel) }, 1000);
  }
}

function resume_timer() {
  my_int = setInterval(function () { setTime(minutesLabel, secondsLabel) }, 1000);
}

function stop_timer() {
  clearInterval(my_int);
}

function reset_timer() {
  totalSeconds = null;
  minutesLabel.innerHTML = "00";
  secondsLabel.innerHTML = "00";
}


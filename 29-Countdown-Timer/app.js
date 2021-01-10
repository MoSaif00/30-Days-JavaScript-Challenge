let countDown;
const timeDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const quickTimeButtons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  document.title = display;
  timeDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTimeDisplay.textContent = ` See You At ${hour} : ${minutes} `;
  // non-european timing
  //   endTimeDisplay.textContent = ` See You At ${
  //     hour > 12 ? hour - 12 : hour
  //   } : ${minutes<10?'0':''}${minutes} `;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

quickTimeButtons.forEach((button) =>
  button.addEventListener('click', startTimer)
);

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

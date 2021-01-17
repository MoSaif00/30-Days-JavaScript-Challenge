const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalSecondHand = document.querySelector('.digital-second-hand');
const digitalMinuteHand = document.querySelector('.digital-min-hand');
const digitalHourHand = document.querySelector('.digital-hour-hand');
const meridiem = document.querySelector('.digital-meridiem');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hour = now.getHours();
  const hoursDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
  else secondHand.style.transition = 'all 0.05s';

  if (minutesDegrees === 90) minuteHand.style.transition = 'all 0s';
  else minuteHand.style.transition = 'all 0.1s';

  digitalSecondHand.innerText = seconds;
  digitalMinuteHand.innerText = minutes;
  digitalHourHand.innerText = hour;
  if (hour >= 12) {
    meridiem.innerText = 'pm';
  } else {
    meridiem.innerText = 'am';
  }
}
setInterval(setDate, 1000);

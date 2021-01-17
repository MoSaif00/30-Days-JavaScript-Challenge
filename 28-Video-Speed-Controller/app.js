const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function speedBar(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  bar.style.height = height;
  const playBackRate = percent * (max - min) + min;
  bar.textContent = playBackRate.toFixed(2) + 'x';
  video.playbackRate = playBackRate;
}
speed.addEventListener('mousemove', speedBar);

const panels = document.querySelectorAll('.panel');

function openThePanel() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    console.log(this);
  }
}
panels.forEach((panel) => panel.addEventListener('click', openThePanel));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);

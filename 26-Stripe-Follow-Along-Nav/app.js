const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropDownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropDownCoords.height,
    width: dropDownCoords.width,
    top: dropDownCoords.top - navCoords.top,
    left: dropDownCoords.left - navCoords.left,
  };
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px,${coords.top}px)`
  );
}
function handleLeave() {
  this.classList.remove('trigger-enter');
  setTimeout(() => {
    this.classList.remove('trigger-enter-active');
  }, 150);
  background.classList.remove('open');
}

triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);

const pressed = [];
const secretWord = 'hi';
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretWord.length - 1, pressed.length - secretWord.length);
  if (pressed.join('').includes(secretWord)) {
    console.log('Hello to the secret page;');
    cornify_add();
  }
  console.log(pressed);
});

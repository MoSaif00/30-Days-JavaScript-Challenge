window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let paragraphElement = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(paragraphElement);

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  paragraphElement.textContent = transcript;

  if (e.results[0].isFinal) {
    paragraphElement = document.createElement('p');
    words.appendChild(paragraphElement);
  }
});

recognition.addEventListener('end', recognition.start);
recognition.start();

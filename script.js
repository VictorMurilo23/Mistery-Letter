const letterText = document.querySelector('#carta-texto');
const generateLetter = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
const wordsCounter = document.querySelector('#carta-contador');
const letterStyle = ['newspaper', 'magazine1', 'magazine2'];
const letterSize = ['medium', 'big', 'reallybig'];
const letterRotation = ['rotateleft', 'rotateright'];
const letterInclination = ['skewleft', 'skewright'];

function wordClasses(element) {
  const word = element;
  word.className = `${letterStyle[Math.floor(Math.random() * 3)]}`;
  word.className += ` ${letterSize[Math.floor(Math.random() * 3)]}`;
  word.className += ` ${letterRotation[Math.floor(Math.random() * 2)]}`;
  word.className += ` ${letterInclination[Math.floor(Math.random() * 2)]}`;
  return word;
}

generateLetter.addEventListener('click', () => {
  letter.innerText = ' ';
  const words = letterText.value.split(' ').filter((element) => element !== '');
  if (words.length !== 0) {
    for (let index = 0; index < words.length; index += 1) {
      const span = document.createElement('span');
      wordClasses(span);
      span.innerText = words[index];
      letter.appendChild(span);
    }
  } else {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  wordsCounter.innerText = words.length;
});

letter.addEventListener('click', ({ target }) => {
  if (target.classList.length === 4) {
    wordClasses(target);
  }
});

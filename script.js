const textoCarta = document.querySelector('#carta-texto');
const botaoGerar = document.querySelector('#criar-carta');
const carta = document.querySelector('#carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

botaoGerar.addEventListener('click', () => {
  carta.innerText = ' ';
  const palavras = textoCarta.value.split(' ');

  if (palavras[0] !== '') {
    for (let index = 0; index < palavras.length; index += 1) {
      const span = document.createElement('span');
      span.className = `${estilo[Math.floor(Math.random() * 3)]}`;
      span.className += ` ${tamanho[Math.floor(Math.random() * 3)]}`;
      span.className += ` ${rotacao[Math.floor(Math.random() * 2)]}`;
      span.className += ` ${inclinacao[Math.floor(Math.random() * 2)]}`;
      span.innerText = palavras[index];
      carta.appendChild(span);
    }
  } else {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

carta.addEventListener('click', (event) => {
  const evento = event.target;
  if (event.target.classList.length === 4) {
    evento.className = `${estilo[Math.floor(Math.random() * 3)]}`;
    evento.className += ` ${tamanho[Math.floor(Math.random() * 3)]}`;
    evento.className += ` ${rotacao[Math.floor(Math.random() * 2)]}`;
    evento.className += ` ${inclinacao[Math.floor(Math.random() * 2)]}`;
  }
});

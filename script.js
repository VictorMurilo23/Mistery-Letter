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
      // eslint-disable-next-line max-len
      span.className = `${estilo[Math.floor(Math.random() * 3)]} ${tamanho[Math.floor(Math.random() * 3)]} ${rotacao[Math.floor(Math.random() * 2)]} ${inclinacao[Math.floor(Math.random() * 2)]}`;
      span.innerText = palavras[index];
      carta.appendChild(span);
    }
  } else {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

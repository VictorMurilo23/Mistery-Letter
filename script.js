const textoCarta = document.querySelector('#carta-texto');
const botaoGerar = document.querySelector('#criar-carta');
const carta = document.querySelector('#carta-gerada');

botaoGerar.addEventListener('click', () => {
  carta.innerText = ' ';
  const palavras = textoCarta.value.split(' ');
  if (palavras[0] !== '') {
    for (let index = 0; index < palavras.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = palavras[index];
      carta.appendChild(span);
    }
  } else {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

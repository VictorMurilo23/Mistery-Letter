const textoCarta = document.querySelector('#carta-texto');
const botaoGerar = document.querySelector('#criar-carta');
const carta = document.querySelector('#carta-gerada');

botaoGerar.addEventListener('click', (event) => {
  event.preventDefault();
  carta.innerText = ' ';
  const palavras = textoCarta.value.split(' ');
  for (let index = 0; index < palavras.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = palavras[index];
    carta.appendChild(span);
  }
});

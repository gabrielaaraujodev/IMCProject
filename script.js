// 'Pegando' os seletores HTML e atrubindo a variáveis em JS.

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const caixaModal = document.querySelector('.caixa-modal')
const modalMessage = document.querySelector('.modal .title span')
const modalClose = document.querySelector('.modal button.close')

// Função para prevenir que a página atualize sozinha por casua do BUTTON
form.onsubmit = (event) => {
  event.preventDefault(); // Prevenir a atualização mencionada acima.

  // Atribuindo os valores digitados pelos usuários no input a variáveis
  const weight = inputWeight.value
  const height = inputHeight.value

  // Atribuindo o resultado da função IMC a uma variável para printa-la
  const result = IMC(weight,height)

  //Trocando o texto do HTML pelo JS
  const message = `Seu IMC é de ${result}`
  modalMessage.innerText = message

  //Fazendo com que o modal APAREÇA (A class 'open' já deve ter sido criada no HTML e configurada no CSS)
  caixaModal.classList.add('open')
}

//Fazendo com que o modal SUMA (A class 'open' já deve ter sido criada no HTML e configurada no CSS)
modalClose.onclick = () => {
  caixaModal.classList.remove('open')
}

// Função para o calculo do IMC
function IMC(weight,height) {
  return (weight / ((height / 100) ** 2)). toFixed(2)
}







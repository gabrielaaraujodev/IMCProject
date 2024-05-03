// 'Pegando' os seletores HTML e atrubindo a variáveis em JS.

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Estruturando dados de uma MODAL. Nesse caso, estamos atribuindo a resposabildiade referente ao MODAL criando-se funções.
const modal = {
  caixa: document.querySelector('.caixa-modal'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  open: function () {
    modal.caixa.classList.add('open')
  },

  close: function (){
    modal.caixa.classList.remove('open')
  }
}

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
  modal.message.innerText = message

  //Fazendo com que o modal APAREÇA (A class 'open' já deve ter sido criada no HTML e configurada no CSS)
  //caixaModal.classList.add('open') - Atribuir essa funcionalidade a propria MODAL criada mais acima:
  modal.open()
}

//Fazendo com que o modal SUMA (A class 'open' já deve ter sido criada no HTML e configurada no CSS)
modal.btnClose.onclick = () => {
  //caixaModal.classList.remove('open') - Atribuir essa funcionalidade a propria MODAL criada mais acima.
  modal.close()
}

// Função para o calculo do IMC
function IMC(weight,height) {
  return (weight / ((height / 100) ** 2)). toFixed(2)
}







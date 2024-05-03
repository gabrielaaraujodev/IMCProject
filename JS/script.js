import { modal } from './modal.js'

// 'Pegando' os seletores HTML e atrubindo a variáveis em JS.

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Função para prevenir que a página atualize sozinha por casua do BUTTON e outras utilidades
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

// Função para o calculo do IMC
function IMC(weight,height) {
  return (weight / ((height / 100) ** 2)). toFixed(2)
}







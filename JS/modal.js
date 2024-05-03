// Retirou estas 'informações' que estava no script 'principal' para exporta-la.


// Estruturando dados de uma MODAL. Nesse caso, estamos atribuindo a resposabildiade referente ao MODAL criando-se funções.
 export const modal = {
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


//Fazendo com que o modal SUMA (A class 'open' já deve ter sido criada no HTML e configurada no CSS)
modal.btnClose.onclick = () => {
  //caixaModal.classList.remove('open') - Atribuir essa funcionalidade a propria MODAL criada mais acima.
  modal.close()
}

// Adicionando o fechamento da MODAL pelo teclado
window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
  if(event.key === 'Escape') {
    modal.close()
  }
}
// Validação dos INPUTS
export function notNumber(value) {
  return isNaN(value) || value == ""
}

// Função para o calculo do IMC
export function IMC(weight,height) {
  return (weight / ((height / 100) ** 2)). toFixed(2)
}
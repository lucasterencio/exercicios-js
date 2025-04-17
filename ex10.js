function calcularIdade(ano){
    const date = new Date().getFullYear()
    return date - ano
}

console.log(calcularIdade(2004))
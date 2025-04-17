function calcularDesconto(valor, desconto){
    return ((100 - desconto) / 100) * valor
}

console.log(calcularDesconto(500, 20))
function calcularImpostoRenda(salario){

    if(salario<=1903.98) return 0
    if(salario >= 1903.99 && salario <= 2826.65) return (salario * 7.5) / 100
    if(salario >= 2826.66 && salario <= 3751.05) return (salario * 15) / 100
    if(salario >= 3751.06 && salario <= 4664.68) return (salario * 22.5) / 100

    return (salario * 27.5) / 100

}

console.log(calcularImpostoRenda(3000))
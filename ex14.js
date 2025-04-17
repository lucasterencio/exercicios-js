function calcularPrecoProduto(custo_venda, margem_lucro, frete){
    return custo_venda + (custo_venda * (margem_lucro) / 100) + frete
}

console.log(calcularPrecoProduto(100, 40, 20))
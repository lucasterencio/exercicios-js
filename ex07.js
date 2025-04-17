
function calcularMediaArredondada(nums){
    const soma =  nums.reduce((acc, atual) => acc+atual ,0)
    const result = soma / nums.length
    return result.toFixed()
    
}

console.log(calcularMediaArredondada([2.6, 4.1, 5.78, 6.33]))
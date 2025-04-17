function contarDigitosParesImpares(num){
    let pares = 0;
    let impares = 0;

    for(let i = 1; i<= num; i++){
        if(i % 2 == 0){
            pares+=1
        } else{
            impares+=1
        }
    }

    console.log(pares, impares)
}

contarDigitosParesImpares(6)
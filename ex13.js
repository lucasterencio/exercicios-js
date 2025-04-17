function verificarPropriedade(obj, string){
    const key = Object.keys(obj)[0]

    return key == string ? true : false
}



console.log(verificarPropriedade({marca: "Audi"}, "idade"))
function inverterString(string){
    let newStr = ""
    for(let i = string.length - 1; i >= 0; i--){
        newStr+=string[i]
    }

    console.log(newStr)
}

inverterString("Lucas")
function printt(arr){
    const char = "*"
    const maxLength = Math.max(...arr.map(p => p.length))
    const borda = char.repeat(maxLength + 4)

    console.log(borda)

    arr.forEach(palavra => {
        const padding = " ".repeat(maxLength - palavra.length)
        console.log(`* ${palavra}${padding} *`)
    })

    console.log(borda)
    
}

printt(["Hello", "World", "paralelepipedo", "in", "a", "frame"])
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tentativas = 0; 

function advinheNumero(num) {
  rl.question("Qual seu chute? ", (chute) => {
    chute = parseInt(chute); 
    tentativas++; 

    if (chute === num) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
      rl.close(); 
    } else if (chute < num) {
      console.log("Muito baixo!");
      advinheNumero(num); 
    } else {
      console.log("Muito alto!");
      advinheNumero(num); 
    }
  });
}

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

advinheNumero(numeroAleatorio);

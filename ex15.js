function longerString(string) {
  string = string.split(" ");
  let maior = string[0];

  for (let valor of string) {
    if (valor.length > maior.length) {
      maior = valor;
    }
  }
  return maior
}

console.log(longerString("Tutorial de desenvolvimento da web"));

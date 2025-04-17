function older(arr) {
  const idade = arr.map(el => el.idade);
  const target = arr.find(el => el.idade === Math.max(...idade));


  return target.nome;
}

console.log(
  older([
    { nome: "Lucas", idade: 20 },
    { nome: "Andre", idade: 70 },
    { nome: "Sara", idade: 6 },
    { nome: "Livia", idade: 45 },
  ])
);

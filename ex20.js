function carInfos(arr, ano_pesquisa) {
  return arr.filter((carro) => carro.ano > ano_pesquisa);
}

console.log(
  carInfos(
    [
      { marca: "Ford", modelo: "Escape", ano: 2001 },
      { marca: "Honda", modelo: "Civic", ano: 2015 },
      { marca: "Volkswagen", modelo: "Jetta", ano: 2022 },
    ],
    2014
  )
);

function calcularMediaAlunos(alunos) {
  const notas = alunos
    .map((el) => el.nota)
    .reduce((acc, current) => acc + current, 0);
  return (notas / alunos.length).toFixed(2)
}

console.log(
  calcularMediaAlunos([
    { nome: "Lucas", nota: 10 },
    { nome: "Andre", nota: 7.0 },
    { nome: "Sara", nota: 6 },
    { nome: "Livia", nota: 4.5 },
  ])
);

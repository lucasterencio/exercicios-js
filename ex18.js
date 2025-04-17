function writtenByAuthor(obj, autor_nome) {
  return obj.filter((autor) => autor.autor === autor_nome);
}

console.log(
  writtenByAuthor([
    { titulo: "O ser humano", autor: "Lucas", ano: 2004 },
    { titulo: "Fim de semana no rio", autor: "Teto", ano: 2020 },
    { titulo: "O diário perdido", autor: "Ana", ano: 1999 },
    { titulo: "A janela azul", autor: "Ana", ano: 1997 },
  ], "Ana")
);

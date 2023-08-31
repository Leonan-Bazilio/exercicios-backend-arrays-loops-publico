const letras = ["A", "a", "B", "C", "E", "e"];
let count = 0;
for (let letra of letras) {
  if (letra == "e" || letra == "E") {
    count++;
  }
}
if (count != 0) {
  console.log(`Foram encontradas ${count} letras "E" ou "e".`);
} else {
  console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}

const numeros = [8, 11, 4, 1];
let nMaior;
let nMenor;
if (numeros.length <= 1) {
  console.log(
    "o array nao possui 2 numeros entao nao é possivel fazer a comparação"
  );
} else {
  for (let numero of numeros) {
    if (nMaior == undefined || numero > nMaior) {
      nMaior = numero;
    }
    if (nMenor == undefined || numero < nMenor) {
      nMenor = numero;
    }
  }
}
console.log(nMaior - nMenor);

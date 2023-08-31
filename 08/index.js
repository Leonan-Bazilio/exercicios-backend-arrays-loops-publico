const numeros = [3, 24, 1, 8, 11, 7, 15];

let aux = 0;
for (let numero of numeros) {
  if (numero > aux) {
    aux = numero;
  }
}
if (numeros.length > 0) {
  console.log(aux);
} else {
  console.log("Não contem nenhum valor");
}

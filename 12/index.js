const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
  let aux = filaDeFora.shift();
  filaDeDentro.push(aux);
}
console.log(filaDeDentro);
console.log(filaDeFora);

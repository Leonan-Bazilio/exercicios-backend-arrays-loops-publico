const numeros = [54, 22, 14, 87, 10, 284];
let count = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] == 10) {
    console.log(i);
    count++;
  }
}
if (count == 0) {
  console.log("-1");
}

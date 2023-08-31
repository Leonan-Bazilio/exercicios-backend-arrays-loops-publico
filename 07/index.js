const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesInicialA = [];
for (let nome of nomes) {
  if (nome[0] == "A" || nome[0] == ["a"]) {
    nomesInicialA.push(nome);
  }
}
console.log(nomesInicialA);

let numb;
console.log("Escreva um valor e farei a distinção se o valor é positivo ou negativo");
numb = Number(prompt("Digite o valor desejado"));

if (numb < 0) {
  console.log("O número é negativo");
} else if (numb > 0) {
  console.log("O número é positivo");
} else {
  console.log("O número é zero");
}
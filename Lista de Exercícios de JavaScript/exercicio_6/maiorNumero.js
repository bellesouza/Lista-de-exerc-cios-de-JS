function maiorNumero() {
    var numero1 = Number(prompt("Digite o primeiro número:"));
    var numero2 = Number(prompt("Digite o segundo número:"));
    var numero3 = Number(prompt("Digite o terceiro número:"));
    var maior = Math.max(numero1, numero2, numero3);
    console.log("O maior número entre " + numero1 + ", " + numero2 + ", e " + numero3 + " é " + maior);
}

// Exemplo de uso:
maiorNumero();
let idade = prompt('Informe sua idade:');

switch(true) {
    case idade < 16:
        console.log("Você não pode votar");
        break;
    
    case idade >= 16 && idade < 18:
        console.log("Voto opcional");
        break;

    case idade >= 18 && idade < 70:
        console.log("Voto obrigatório");
        break;

    case idade > 70:
        console.log("Voto opcional");
        break;

    default:
        console.log("idade não foi informado");
        break;
}
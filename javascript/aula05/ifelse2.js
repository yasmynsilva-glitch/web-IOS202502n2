let idade = 16
let temDinheiro = true
let temCadUnico = true
// > maior que
// >= maior ou igual a 
// < menor que
//<= menor ou igual a

if (idade >= 18) {
    if (temDinheiro == true) {
        console.log(" vamos pagar o quebra ");
    }
    else {
        if (temCadUnico == true) {
            console.log("cnh de graça");
        }
        else {
            console.log("pobrinho e sem cadastro");
        }
    }
}

else {
    console.log("muito novo para pilotar");
}
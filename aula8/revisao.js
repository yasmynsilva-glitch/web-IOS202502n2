let login = prompt("insira seu e/gmail")
let senha = prompt("insira sua senha")

let loginCerto= "yasmyn@gmail.com"
let senhaCerta = "batatinha123"
// validar se o login é o certo e se a senha tambem é
if (login= loginCerto && senha== senhaCerta) {
    alert (" credencial validada.")

    alert(" opção 1: crédito \n opção 2:consignado \n opção 3: emprestimo \n opção 4: renegociar \n opção 0: falar com atendente")
let opcao= Number( prompt ("escolha a opção"))

switch (opcao) {
    case 1:
        alert("Você selecionou crédito. redirecionando para o setor responsável")
        break;
    case 2:
        alert("Você selecionou consignado  .redirecionando para o setor responsável")
        break;
    case 3:
        alert("Você selecionou emptestimo .redirecionando para o setor responsável")
        break;
    case 4:
        alert("Você selecionou  renegociar .redirecionando para o setor responsável")
        break;
    case 0:
        alert("Você selecionou falar com atendente .redirecionando para o setor responsável")
        break;







    default:
        alert("o usuario não selecionou uma opção válida. encerrando atendimento.")
        break;
}


}
// se o login ou a senha que o usuario inseriu nao forem iguais a que temos , ele nao pode fazer login no aplicativo
else{
    alert(" login ou senha incorretos")
}
let login
let senha
let loginCerto = "yasmyn@gmail.com"
let senhaCerta = "batatinha123"


// enquanto a senha que o usuario for diferente da senha certa continuaremos pedindo para inserir a senha novamente


//do= faça e while= enquanto, o que da nome a estrutura dowwhilw , ou seja  faça enquanto
// dowhile executa o codigo 

do {
    login = prompt("insira seu e/gmail")
} while (login != loginCerto);

do {
    senha = prompt("insira sua senha")

} while (senha != senhaCerta);
//peça a senha oelo menos uma vez, e caso o usuario n coloque a senhaCErta, repita o codigo 

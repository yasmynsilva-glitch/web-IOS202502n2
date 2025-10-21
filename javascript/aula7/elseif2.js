let credencial= "ceo"

if (credencial == "visitante") {
    console.log(" você só pode ir aonde o seu anfitrao ir");
}
else if (credencial=="estagiario") {
    console.log(" voce só pode acessar as baias de trabalho");
}
else if (credencial=="aprendiz") {
    console.log(" voce só pode acessar as areas de lazer, baias, e refeitorio ");
}
else if (credencial=="clt") {
    console.log(" voce só pode acessar tudo, exeto a diretoria ");
}
else if (credencial=="ceo") {
    console.log(" o céu é o limite");
}
else{
    console.log(" credencial invalida, acesso negado");
}
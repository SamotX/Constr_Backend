const readline = require ("readline-sync")

function menu(){
    console.log ('1. Listar')
    console.log ('2. Criar')
    console.log ('3. Buscar')
    console.log ('4. Atualizar')
    console.log ('5. Remover')
    console.log ('6. Sair')
}

function listar() {
    const contatos =[{nome: "José", telefone: "9999-9999"}];
    contatos.forEach(conatato => {
            contato.nome, '-', conatato.telefone
    });
    readline.question("Pressione ENTER para continuar");

}
function adicionar(){
    const nome = readline.question("Informe o nome do conatato: ");
    const telefone = readline.question("Informe o telefone do conatato: ");
    const novo = {nome, telefone};
    contatos.push(novo);
    readline.question("Pressione ENTER para continuar");

}

function escolherOpcao (opcao) {
    switch(opcao){
        case '1' : listar();break;
        case '2' : adicionar() ;break;
        case '3' : break;
        case '4' : break;
        case '5' : break;
        case '6' : process.exit(0);
        default : console.log('Opção invalida')
    }
} b



function main(){
    while(true){
        menu();
        const opcao = readline.question("Entre com uma opção: ")
        escolherOpcao(opcao)
    }
}

main();
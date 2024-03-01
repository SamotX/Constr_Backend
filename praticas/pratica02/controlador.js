const Contato = require('./caminho/para/o/arquivo');

const contatos =[]

function adicionarContato(nome, email, telefone){ 
    const novoContato = new Contato(nome, email, telefone)
    contatos.push(novoContato) 
}

function listarContatos(){
    listaDeContatos.forEach(contato => {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
      });
}

function buscarContato(nome){
    const contatoEncontrado = contatos.find(contato => contato.nome === nome)
    console.log(contatoEncontrado)
    return contatoEncontrado
}


function atualizarContato(nome){
    buscarContato(nome)
    
}
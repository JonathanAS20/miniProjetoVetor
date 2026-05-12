const prompt = require('prompt-sync')();

let hamburgueria = [ ]

function exibirMenu(){
    console.log('\n=== Menu da Hamburgueria ===')
    console.log('1 - Adicionar')  // CREATE
    console.log('2 - Listar')  // READ
    console.log('3 - Alterar')  // UPDATE
    console.log('4 - Deletar')  // DELETE
    console.log('5 - Sair')
}
//exibirMenu()

//ADICIONAR
function adicionarHamburguer(){
    const nome = prompt('Nome do Hambúrguer: ');
    const preco = parseFloat(prompt('Preço do Hambúrguer: '));
    hamburgueria.push({nome, preco})
    console.log('Hambúrguer adicionado com sucesso!');
}

function verHamburgueres(){
    if(hamburgueria === 0){
        console.log('Nenhum hambúrguer encontrado');
        return;
    }
    console.log("\n=== Lista de hambúrgueres ===");
    for(let cont = 0; cont < hamburgueria.length; cont++){
        let hamburguer = hamburgueria[cont]
        console.log(`${cont + 1} Nome: ${hamburguer.nome}, Preço: ${hamburguer.preco}`)
    }
}











adicionarHamburguer();
adicionarHamburguer();
verHamburgueres();

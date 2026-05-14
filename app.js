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
    //for(let i = 0; i <hamburgueria.length; i++){
    //    hamburgueria.forEach((hamburguer) => {
    //    console.log(`${i + 1} Nome: ${hamburguer.nome} Preço R$: ${hamburguer.preco}`)
    //    })
    //}
}

function atualizarHamburguer(){
    verHamburgueres()
    const index = parseInt(prompt('Escolha o hambúrguer para atualizar: ')) -1;
    if(index < 0 || index>= hamburgueria.length){
        console.log("Número inválido.")
        return;
    }
    const novoNome = prompt("Novo nome: ");
    const novoPreco = prompt("Novo preço: ");
    hamburgueria[index] = {nome: novoNome, preco: novoPreco}
    console.log("Atualizado com sucesso!")
}
function deletarHamburguer(){
    verHamburgueres()
    const index = parseInt(prompt('Escolha o hambúrguer para deletar: ')) -1;
    if(index < 0 || index>= hamburgueria.length){
        console.log("Número inválido.")
        return;
    }
    hamburgueria.splice(index, 1);
    console.log("Deletado com sucesso!");
}

function principal(){
    let opcao

    do{
        exibirMenu()
        opcao = parseInt(prompt("Digite uma opção: "));
        switch(opcao){
            case 1:
                adicionarHamburguer();
                break;
            case 2:
                verHamburgueres();
                break;
            case 3:
                atualizarHamburguer();
                verHamburgueres();
                break;
            case 4:
                deletarHamburguer();
                verHamburgueres();
                break;
            case 5:
                console.log("Saindo...");
                break;
            default:
                console.log("Opcão inválida!")
                break;
        }
    }while(opcao !== 5);
}
principal()
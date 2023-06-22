import {addMaterial} from './services/service.js'

// array
var dadosTabela = []


//Recuperar dados
let qtdeMaterial = document.getElementById('qtd').value;
let nomeMaterial = document.getElementById('produto').value;
let precoUnitario = document.getElementById('preço').value;
let editar1 = ('<button id="editar" class="apagarFormato" onclick="editarConteudo(this)"><i class="fa-solid fa-pen-to-square"></i></button>')
let apagar = ('<button id="apagar" class="apagarFormato" onclick="apagarLinha(this)"><i class="fa-solid fa-trash"></i></button>');

//Recuperando itens
var tabelaRecuperada = localStorage.getItem('tabela')

//Converter para Array
var arrayRecuperado = JSON.parse(tabelaRecuperada)


arrayRecuperado.forEach(e => {
    var novaLinha = document.createElement('tr');
    var colunaqtd = document.createElement('td');
    var colunaproduto = document.createElement('td')
    var colunapreço = document.createElement('td')
    var colunaEditar = document.createElement('td')
    var colunaExcluir = document.createElement('td')

    colunaqtd.textContent = e.Quantidade;
    colunaproduto.textContent = e.Produto;
    colunapreço.textContent = e.Preço;
    colunaEditar.innerHTML = editar1;
    colunaExcluir.innerHTML = apagar;

    novaLinha.appendChild(colunaqtd);
    novaLinha.appendChild(colunaproduto);
    novaLinha.appendChild(colunapreço);
    novaLinha.appendChild(colunaEditar);
    novaLinha.appendChild(colunaExcluir);

    colunaEditar.classList.add('apenasEditar')
    colunaEditar.classList.add('none')
    colunaEditar.classList.add('bgtd')
    colunaExcluir.classList.add('apenasEditar')
    colunaExcluir.classList.add('none')
    colunaExcluir.classList.add('bgtd')

    tbody.appendChild(novaLinha);
})
arrayRecuperado.forEach(n => {
    dadosTabela.push(n)
})


//funções dos Botões

function cadastrarProduto() {
    var qtdeMaterial = document.getElementById('qtd').value;
    var nomeMaterial = document.getElementById('produto').value;
    var precoUnitario = document.getElementById('preço').value;
    var editar = ('<button id="editar" class="apagarFormato" onclick="editarConteudo(this)"><i class="fa-solid fa-pen-to-square"></i></button>')
    var apagar = ('<button id="apagar" class="apagarFormato" onclick="apagarLinha(this)"><i class="fa-solid fa-trash"></i></button>');

    if (qtdeMaterial != "" && precoUnitario != "" && nomeMaterial != "") {
        let alerta = document.getElementById('alerta')
        alerta.classList.remove('none')
        var tabela = document.getElementById('tabela');
        var tbody = tabela.getElementsByTagName('tbody')[0];

        const dadosLinha = { 
            quantidade: Number(qtdeMaterial),
            produto:  nomeMaterial,
            preco: Number(precoUnitario)
        }

        dadosTabela.push(dadosLinha)

        //convertendo para json
        var tabelaArray = JSON.stringify(dadosTabela)

        //salvando no Local Storage
        localStorage.setItem('tabela', tabelaArray)

        var novaLinha = document.createElement('tr');
        var colunaqtd = document.createElement('td');
        var colunaproduto = document.createElement('td')
        var colunapreço = document.createElement('td')
        var colunaEditar = document.createElement('td')
        var colunaExcluir = document.createElement('td')

        colunaqtd.textContent = qtdeMaterial;
        colunaproduto.textContent = nomeMaterial;
        colunapreço.textContent = precoUnitario;
        colunaEditar.innerHTML = editar;
        colunaExcluir.innerHTML = apagar;

        novaLinha.appendChild(colunaqtd);
        novaLinha.appendChild(colunaproduto);
        novaLinha.appendChild(colunapreço);
        novaLinha.appendChild(colunaEditar);
        novaLinha.appendChild(colunaExcluir);

        colunaEditar.classList.add('apenasEditar')
        colunaEditar.classList.add('none')
        colunaEditar.classList.add('bgtd')
        colunaExcluir.classList.add('apenasEditar')
        colunaExcluir.classList.add('none')
        colunaExcluir.classList.add('bgtd')

        tbody.appendChild(novaLinha);

        document.getElementById('qtd').value = ''
        document.getElementById('produto').value = ''
        document.getElementById('preço').value = ''

    } else {
        let alerta2 = document.getElementById('alerta2')
        alerta2.classList.toggle('none')
    }
    function fecharAlerta() {
        let alerta2 = document.getElementById('alerta2')
        alerta2.classList.add('none')
        let alerta = document.getElementById('alerta')
            alerta.classList.add('none')
    }
    
    setTimeout(fecharAlerta, 3000)
    
}


function mostrarEstoque() {
    let estoque = document.getElementById('estoque')
    let cadastro = document.getElementById('caixa')
    estoque.classList.toggle('none')
    cadastro.classList.toggle('none')
    estoque.classList.toggle('aparecer')
    cadastro.classList.toggle('aparecer')
    
    let editar = document.querySelectorAll('.apenasEditar')
    editar.forEach(elemento => {
        elemento.classList.add('none');
    })
}

function editarProdutos() {
    var editar = document.querySelectorAll('.apenasEditar')
    editar.forEach(elemento => {
        elemento.classList.toggle('none');
    })

}

function apagarLinha(botao) {
    
    let linha = botao.parentNode.parentNode;
    let cells = linha.getElementsByTagName('td');
    
    //Recuperando itens
    var tabelaRecuperada = localStorage.getItem('tabela')

    //Converter para Array
    var arrayRecuperado = JSON.parse(tabelaRecuperada)
    let arrayProduto = arrayRecuperado.map(x => x.Produto)
    arrayRecuperado.splice(arrayProduto.indexOf(cells[1].innerText),1)
    dadosTabela = arrayRecuperado
    
    //convertendo para json
    var tabelaArray = JSON.stringify(dadosTabela)

    //salvando no Local Storage
    localStorage.setItem('tabela', tabelaArray)
    linha.parentNode.removeChild(linha)
}

function editarConteudo(botao) {
    
    let estoque = document.getElementById('estoque')
    let cadastro = document.getElementById('caixa')
    estoque.classList.toggle('none')
    cadastro.classList.toggle('none')
    estoque.classList.toggle('aparecer')
    cadastro.classList.toggle('aparecer')
    
    apagarLinha(botao)
    
    let linha = botao.parentNode.parentNode;
    let cells = linha.getElementsByTagName('td');


    document.getElementById('qtd').value = cells[0].innerText
    document.getElementById('produto').value = cells[1].innerText
    document.getElementById('preço').value = cells[2].innerText
}


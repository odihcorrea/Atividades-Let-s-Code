var nomeCadastro = ''
var emailCadastro = ''
var dataNascimento = ''
var senhaCadastrada = ''
var senhaConfirmar = ''
var email = ''
var senha = ''
var nomeRecuperar = ''
var emailRecuperar = ''
var nascRecuperar = ''
var emailFinal = ""
var senhaFinal = ""
var dataNascimentoFinal = ""
var nomeCadastroFinal = ""

//login



//cadastro


//recuperar senha
nomeRecuperar = document.getElementById('nomeRecuperar').value
emailRecuperar = document.getElementById('emailRecuperar').value
nascRecuperar = document.getElementById('nascRecuperar').value


// feedback
let senhaIncorreta = document.getElementById('senha')
let emailll = document.getElementById('emailll')
//validações



// funções

function criarCadastro() {
    nomeCadastro = document.getElementById('nomeCompleto').value
    dataNascimento = document.getElementById('nasc').value
    senhaConfirmar = document.getElementById('confirmarSenha').value
    emailCadastro = document.getElementById('email2').value
    senhaCadastrada = document.getElementById('cadastrarSenha').value
    if (senhaCadastrada != senhaConfirmar || senhaCadastrada == "") {
        alert('Preencha os campos corretamente')
    }   else {
        emailFinal = emailCadastro
        senhaFinal = senhaCadastrada
        nomeCadastroFinal = nomeCadastro
        dataNascimentoFinal = dataNascimento
        alert('Conta criada com sucesso')
        acessarConta()
    }
}

function entrar() {
    email = document.getElementById('emailll').value
    if (senha == "") {
        senha = 'indefinido'
    } else {
        senha = document.getElementById('senha').value
    }

    if (senha != senhaCadastrada) {
        senhaIncorreta.classList.add('is-invalid')
    } 
    
    if (senha == senhaFinal && email == emailFinal) {
        alert('Login Realizado')
        document.write('<h1>Teste Finalizado</h1>')
    } else {
        alert('Verifique seus dados')
    }
    
}   
let novaSenha = document.getElementById('novaSenha1')

function redefinirSenha() {
    let nomeRecuperar = document.getElementById('nomeRecuperar').value 
    let emailRecuperar = document.getElementById('emailRecuperar').value 
    let nascRecuperar = document.getElementById('nascRecuperar').value 
    let btnAlterarSenha2 = document.getElementById('btnAlterarSenha2')
    let btnAlterarSenha = document.getElementById('btnAlterarSenha')

    if (
        dataNascimentoFinal == nascRecuperar && 
        emailFinal == emailRecuperar && 
        nomeCadastroFinal == nomeRecuperar && 
        nascRecuperar != "" &&
        emailRecuperar != "" &&
        nomeRecuperar != ""
        ) 
        {
        novaSenha.classList.remove('esconder')
        btnAlterarSenha2.classList.remove('esconder')
        btnAlterarSenha.classList.add('esconder')

    } else {
        alert('Preencha todos os Campos igual ao cadastro')
    }
}

function redefinirSenha2() {
    let cadastrarSenha2 = document.getElementById('cadastrarSenha2').value
    let confirmarSenha2 = document.getElementById('confirmarSenha2').value
    
    if (cadastrarSenha2 != confirmarSenha2 || confirmarSenha2 == "") {
        let confirmarSenha2x = document.getElementById('confirmarSenha2')
        confirmarSenha2x.classList.add('is-invalid')
    } else {
            senhaFinal = cadastrarSenha2
            alert('Senha Alterada com sucesso')
            acessarConta()
    }
}

let cadastro = document.getElementById('cadastroInput');
let login = document.getElementById('loginInput');
let senhaRecuperar = document.getElementById('recuperarSenha')

function criarConta() {
    login.classList.add('esconder');
    login.classList.remove('aparecer');
    senhaRecuperar.classList.remove('aparecer');
    senhaRecuperar.classList.add('esconder');
    cadastro.classList.add('entrar');
    cadastro.classList.add('aparecer');
    senhaIncorreta.classList.remove('is-invalid')

}

function acessarConta() {
    cadastro.classList.add('esconder');
    cadastro.classList.remove('aparecer');
    senhaRecuperar.classList.remove('aparecer');
    senhaRecuperar.classList.add('esconder');
    login.classList.add('entrar');
    login.classList.add('aparecer');
}

function acessarConta2() {
    cadastro.classList.add('esconder');
    cadastro.classList.remove('aparecer');
    senhaRecuperar.classList.remove('aparecer');
    senhaRecuperar.classList.add('esconder');
    login.classList.add('entrar');
    login.classList.add('aparecer');
}

function mudarSenha() {
    cadastro.classList.add('esconder');
    cadastro.classList.remove('aparecer');
    login.classList.remove('aparecer');
    login.classList.add('esconder');
    senhaIncorreta.classList.remove('is-invalid')
    senhaRecuperar.classList.add('entrar');
    senhaRecuperar.classList.add('aparecer');
}

let btnEntrar = document.getElementById('btnEntrar')
let btnCriarConta = document.getElementById('btnCriarConta')
let btnCriarConta2 = document.getElementById('btnCriarConta2')
let btnEntrarConta = document.getElementById('btnEntrarConta')
let btnEntrarConta2 = document.getElementById('btnEntrarConta2')
let btnAlterarSenha = document.getElementById('btnAlterarSenha')
let body = document.getElementById('body')
let modoDark = document.getElementById('modoDark')
let modoNormal = document.getElementById('modoNormal')
let btnEsqueci = document.getElementById('btnEsqueci')

function mudarModoDark() {
    modoDark.classList.add('esconder')
    modoNormal.classList.remove('esconder')
    btnEntrar.classList.add('btnDark')
    btnCriarConta.classList.add('btnDark')
    btnCriarConta2.classList.add('btnDark')
    btnAlterarSenha.classList.add('btnDark')
    btnEntrarConta.classList.add('btnDark')
    btnEsqueci.classList.add('btnDark')
    btnAlterarSenha.classList.add('btnDark')
    btnEntrarConta2.classList.add('btnDark')
    body.classList.add('bgDark')
}

function mudarModoNormal() {
    modoNormal.classList.add('esconder')
    modoDark.classList.remove('esconder')
    btnEntrar.classList.remove('btnDark')
    btnCriarConta.classList.remove('btnDark')
    btnCriarConta2.classList.remove('btnDark')
    btnAlterarSenha.classList.remove('btnDark')
    btnEntrarConta.classList.remove('btnDark')
    btnEntrarConta2.classList.remove('btnDark')
    body.classList.remove('bgDark')    
    btnEsqueci.classList.remove('btnDark')

}
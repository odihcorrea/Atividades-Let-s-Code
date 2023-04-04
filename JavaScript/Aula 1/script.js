var calc = '';
var resultado = '';
var calc1 = '';
var ope = '';


function um() {
    calc = calc + "1";
    document.getElementById("saida").innerText = calc;
}

function dois() {
    calc = calc + "2";
    document.getElementById("saida").innerText = calc;
}

function tres() {
    calc = calc + 3;
    document.getElementById("saida").innerText = calc;
}

function quatro() {
    calc = calc + 4;
    document.getElementById("saida").innerText = calc;
}

function cinco() {
    calc = calc + 5;
    document.getElementById("saida").innerText = calc;
}

function seis() {
    calc = calc + 6;
    document.getElementById("saida").innerText = calc;
}

function sete() {
    calc = calc + 7;
    document.getElementById("saida").innerText = calc;
}

function oito() {
    calc = calc + 8;
    document.getElementById("saida").innerText = calc;
}

function nove() {
    calc = calc + 9;
    document.getElementById("saida").innerText = calc;
}

function zero() {
    calc = calc + 0;
    document.getElementById("saida").innerText = calc;
}

function C() {
    calc = "";
    calc1 = '';
    document.getElementById('saida').innerText = calc;
}

function maisMenos() {
    calc = -calc;
    document.getElementById('saida').innerText = calc;
}

function porcentagem() {
    calc = calc/100;
    document.getElementById('saida').innerText = calc;
}

function mais() {
    calc = Number(calc1) + Number(calc);
    calc1 = calc;
    document.getElementById('saida').innerText = calc;
    calc = '';
    ope = '+';
}

function menos() {
    calc = Number(calc1) - Number(calc);
    calc1 = calc;
    document.getElementById('saida').innerText = calc;
    calc = '';
    ope = '-';
}

function vezes() {
    if (calc1 > 0)
        calc = Number(calc1) * Number(calc);
    calc1 = calc;
    document.getElementById('saida').innerText = calc;
    calc = '';
    ope = '*';
}

function dividir() {
    if (calc1 > 0)
    calc = Number(calc1) / Number(calc);
    calc1 = calc;
    document.getElementById('saida').innerText = calc;
    calc = '';
    ope = '/';
}

function igual() {
    if (ope == '+')
        document.getElementById('saida').innerText = Number(calc1) + Number(calc);
    else if (ope == '-')
        document.getElementById('saida').innerText = Number(calc1) - Number(calc);
    else if (ope == '*')
        document.getElementById('saida').innerText = Number(calc1) * Number(calc);
    else if (ope == '/')
        document.getElementById('saida').innerText = Number(calc1) / Number(calc);
    else
        document.getElementById('saida').innerText = "ERROR"

    
    ope = '';
}
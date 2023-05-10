var fibonacci = 0;
var aux = 1;
var array = []
function fibona() {
    fibonacci = fibonacci + aux;
    aux = fibonacci - aux;
    array.push(aux)
    document.getElementById('fibo').innerText = array;
}

function fatorial() {
    let fatorial = document.getElementById('numero').value;

for (var i=fatorial-1; i>0; i--) {
    fatorial = fatorial * i;
}
document.getElementById('fato').innerText = fatorial;
}

function isPalindrome() {
    var palindromo = document.getElementById('nome').value;
    var aux = palindromo.split('')
    var contrario = ''

    for (var i = palindromo.length-1; i>=0; i--) {
        contrario += aux[i]
    }

    if (contrario === palindromo) {
        document.getElementById('palindromo').innerText = 'O contrário de '+palindromo+' é '+contrario+', logo é um palindromo'
    } else {
        document.getElementById('palindromo').innerText = 'O contrário de '+palindromo+' é '+contrario+', logo não é um palindromo'
    }    
}
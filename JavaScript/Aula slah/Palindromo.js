var palindromo = 'arara';
var aux = palindromo.split('')
var contrario = ''

for (var i = palindromo.length-1; i>=0; i--) {
    contrario += aux[i]
}

let isPalindromo = (palindromo === contrario) ? 'É palindromo' : 'Não é palindromo';

console.log(isPalindromo)


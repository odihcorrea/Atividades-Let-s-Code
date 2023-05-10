let nome = 'Adilson'
let nomeArray = nome.split('')
let ordem = ''

for (i = nomeArray.length-1; i>=0; i--) {
    ordem += nomeArray[i];
}
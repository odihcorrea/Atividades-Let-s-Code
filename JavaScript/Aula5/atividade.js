function teste() {
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    let n3 = Number(document.getElementById('num3').value);

    let primeiro = n1;
    let segundo = n2;
    let terceiro = n3;

    if (n1 < n2 && n2 < n3) {
        primeiro = n1;
        segundo = n2;
        terceiro = n3;
    } else if (n2 < n1 && n1 < n3) {
        primeiro = n2;
        segundo = n1;
        terceiro = n3;
    } else if (n3 < n1 && n1 < n2) {
        primeiro = n3;
        segundo = n1;
        terceiro = n2;
    } else if (n1 < n3 && n3 < n2) {
        primeiro = n1;
        segundo = n3;
        terceiro = n2;
    } else if (n2 < n3 && n3 < n1) {
        primeiro = n2;
        segundo = n3;
        terceiro = n1;
    } else if (n3 < n2 && n2 < n1) {
        primeiro = n3;
        segundo = n2;
        terceiro = n1;
    } 
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert('DIGITE APENAS NÚMEROS');
    } else {
        document.getElementById("texto").innerText = 'A ordem crescente dos números é: ' + primeiro +', ' + segundo + ', ' + terceiro;
    }

}
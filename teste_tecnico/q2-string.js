// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou 
// minúscula, além de informar a quantidade de vezes em que ela ocorre.

const prompt = require('prompt-sync')();

function containsLetterA(word){
    word = word.toLowerCase()
    let n = 0;

    for (const letter of word) {
        if (letter == 'a'){n++;}
    }
    return n;
}

function displayResult(n, word){
    if (n > 0){
        console.log(`A letra 'a' aparece ${n} vez(es) na string '${word}'.`)
    } else {
        console.log(`A letra a não aparece na string '${word}'.`)
    }
}

function __main__(){
    console.log(`Verifique se a letra 'a' existe na string digitada.`)
    console.log(`(O programa executará 10 vezes)`)
    for (i = 10; i > 0; i--){
        
        const word = prompt('Digite uma string:');
        numberOfAs = containsLetterA(word)
        displayResult(numberOfAs, word)
        console.log('')
    }
}

__main__()
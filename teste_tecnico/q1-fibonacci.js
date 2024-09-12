// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre 
// será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
// Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const prompt = require('prompt-sync')();

fibArray = [0, 1, 1]

//gera a sequencia de fib até um número igual ou superior ao input
function generateFibonacci(n){
    while (n > fibArray.at(-1)){
        newFib = fibArray.at(-1) + fibArray.at(-2)
        fibArray.push(newFib)
    }
}

function isFibbonaci(n){
    if (fibArray.includes(n)){
        console.log(`${n} está na sequencia de Fibonacci.`) 
    } else if(n < fibArray.at(-1) && !fibArray.includes(n)){
        console.log(`${n} não está na sequencia de Fibonacci.`)
    } else {
        generateFibonacci(n)
        //Chamada recursiva da função isFibonacci
        isFibbonaci(n)
    }
}

function __main__(){
    console.log('Verifique se um número pertence à sequencia de Fibonacci.')
    console.log(`O programa executará 10 vezes`)
    for (i = 10; i > 0; i--){
        const n = prompt('Digite um número inteiro:');
        isFibbonaci(parseInt(n))
        console.log('')
    }
}

__main__()
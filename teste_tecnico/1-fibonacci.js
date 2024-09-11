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
isFibbonaci(147)
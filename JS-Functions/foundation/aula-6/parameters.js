function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)// Caso tenha mais numeros do que os parametros, a linguagem JS apenas ignora os adicionais
logParams(1, 2, 3)
logParams(1, 2) // Caso eu passe menos numeros para os parametros, também não ocorre nenhum erro, pois o JS é uma lingugem
//super flexível, e os valores não atribuidos viram undefined
logParams(1)
logParams()


// Tem uma maneira de definir um valor para o parametro caso não seja definido depois que a função for executada
function defaultParams(a, b = 0, c = 0){
    console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8 , 9, 10)

// Array
// spread/rest = ...

function logNums(...nums){
    //simplicicar
    console.log(nums)
//    console.log(Array.isArray(nums ))
//    for(let n of nums) {
//        console.log(n)
//    }
}

logNums(1, 2, 3, 4, 5, 6)

function sumAll(...nums){
    let total = 0
    for (let n of nums){
        total += n
    }    

    return total
}

console.log(sumAll(1, 2, 3, 4 ,5, 6, 7, 8, 9, 10))
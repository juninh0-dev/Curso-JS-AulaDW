function bomDia(){
    console.log('Bom dia!!!!!!!!!!!')
}

const bomTarde = function abc(){
    console.log('Boa tarde!!!!!!')
}

// 1) Passar uma função como param pra outra função
function executarQualquerCoisa(fn) {
    if(typeof fn == 'function'){
        fn()
    }
} 

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(bomTarde)

// 2) Retornar uma função a partir de uma outra função

//function potencia(base, exp) {
//    return Math.pow(base, exp)
//}

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}


//const bits8 = potencia(2, 8)
//console.log(bits8)

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))


const resultPotencia = potencia(3)(4)
console.log(resultPotencia)
let a = 4

console.log(a)

//Function Declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

//Function expression

const boaTarde = function(){
    console.log('Boa Tarde!')
}

let x = boaTarde() //undefined
console.log(x)

function somar(a = 0, b = 0){
    return a + b
}

let resultado = somar(3, 4, 5, 6, 7, 8)//Ele ignora os outros parametro, pois só foi definido 2 parametros
console.log(resultado)

resultado = somar(3, 5, 5, 6, 7, 8)//Ele ignora os outros parametro, pois só foi definido 2 parametros
console.log(resultado)

resultado = somar(3)//Um número 2 + undefined = NaN
console.log(resultado)

resultado = somar()//Mas como eu declarei na função os valores de A e B ele nao dá NaN
console.log(resultado)
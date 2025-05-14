// arrow function

const felizAnoNovo = () => console.log('Feliz Ano Novo!!!!!!!!');
felizAnoNovo()


const saudacao = nome => `Fala ${nome}, blzz??!!! ${2 * 2}`
console.log(saudacao('Maria'))

const somar = (...numbers) => { // => pode ser interpretada como function
    console.log(Array.isArray(numbers))
    let total = 0
    for (let n of numbers) {
        total += n
    }

    return total
}


//... arrest, ele pega todos os parametros e transforma num array

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))



const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(10))

//Array.prototype.log = function (){
//    console.log(this)
//}
//const numbers = [1, 2, 3]
//numbers.log()


Array.prototype.ultimo = function (){ // uma funcao Arrow nao consegue identificar o this
    console.log(this[this.length - 1])
}

const numbers = [1, 2, 3]
numbers.ultimo()
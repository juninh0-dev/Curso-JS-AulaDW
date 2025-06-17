let a = 1
console.log(a)

//let p = new Promise(function(cumprirPromessa){
//    cumprirPromessa(3, 4)//Ele sõ cumpre uma promessa mesmo declarando 2 parâmetros
//})

const primeiroElemento = array => array[0]

const primeiraLetra = string => string[0]


const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (resolve) {
    resolve(
        //x: 3,
        //y: 4
        ['Ana', 'Bia', 'Carlos', 'Mario'])
}).then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)



//p
//    .then(valor => valor[0])
//    .then(primeiro => primeiro[0])
//    .then(letra => letra.toLowerCase())
//    .then(letraMinuscula => console.log(letraMinuscula))


//p.then(valor => console.log(valor))

//p.then(function(valor){
//    console.log(valor)
//})
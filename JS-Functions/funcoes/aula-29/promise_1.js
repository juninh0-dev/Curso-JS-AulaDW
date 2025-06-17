let a = 1
console.log(a)

//let p = new Promise(function(cumprirPromessa){
//    cumprirPromessa(3, 4)//Ele sõ cumpre uma promessa mesmo declarando 2 parâmetros
//})

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(
        //x: 3,
        //y: 4
        ['Ana', 'Bia', 'Carlos', 'Mario'])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))


//p.then(valor => console.log(valor))

//p.then(function(valor){
//    console.log(valor)
//})
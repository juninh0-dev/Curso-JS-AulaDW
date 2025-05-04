const numbers = [1, 2, 3, 4, 5, 6]
const numbersV2 = numbers.map(el => el * 2)

// O Array rwesultante na função map,
// tem obrigatóriamente o mesmo valor
// o mesmo tamnho que o Array original,
// só que se usa uma função para tranformar
// um elemento em outro elemento
// é possível chamar um map depois de um map dentro de um map

//const numbersV3 = []
//for(let n of numbers){
//    numbersV3.push(n * 3)
//}

console.log(numbers , numbersV2/*, numbersV3*/)

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1},
]

const getScore = el => el.score

const result = students
    .map(getScore)
    .map(Math.ceil) 
        //ceil => arredonda pra cima
        //floor => arredonda pra baixo
console.log(students, result)
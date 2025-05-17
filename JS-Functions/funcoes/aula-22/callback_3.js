const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))


const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const words = names.map(primeiraLetra)

console.log(names, words)


//const dobro = (n, i, a) => n * 2 + i + a.length
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))
//const dobro = (n, i, a) => n * 2 + i + a.length

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const words = names.map(primeiraLetra)

console.log(names, words)




const carrinho = [
    {name: 'Caneta', amount: 10, price: 7.99},
    {name: 'Impressora', amount: 0, price: 649.50},
    {name: 'Caderno', amount: 4, price: 27.10},
    {name: 'Lapis', amount: 3, price: 5.82},
    {name: 'Tesoura', amount: 1, price: 19.20},
]

//const getName = item => item.name
//console.log(carrinho.map(getName)) 

//const getTotal = item => item.amount * item.price
//const total = carrinho.map(getTotal) 
//console.log(total) 


Array.prototype.myMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        const result = fn(this[i], i, this)
        novoArray.push(`==> ${result}`)
        
    }

    return novoArray
}

const getName = item => item.name
console.log(carrinho.myMap(getName)) 

const getTotal = item => item.amount * item.price
const total = carrinho.myMap(getTotal) 
console.log(total)
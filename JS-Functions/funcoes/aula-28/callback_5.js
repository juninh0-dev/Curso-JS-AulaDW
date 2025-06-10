const carrinho = [
    {name: 'Caneta', amount: 10, price: 7.99},
    {name: 'Impressora', amount: 0, price: 649.50},
    {name: 'Caderno', amount: 4, price: 27.10},
    {name: 'Lapis', amount: 3, price: 5.82},
    {name: 'Tesoura', amount: 1, price: 19.20},
]

const getTotal = item => item.amount * item.price
const somar = (acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)


Array.prototype.meuReduce = function(fn, incial){
    let acc = incial

    for(let i = 0; i < this.length; i++){
       if(!acc && i === 0) {
        acc = this[i]
        continue
       } 

       acc = fn(acc, this[i], i, this)
    }
    return acc
}

const totalGeral2 = carrinho
    .map(getTotal)
    .meuReduce(somar)

console.log(totalGeral2)
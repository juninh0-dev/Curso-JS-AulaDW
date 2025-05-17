const carrinho = [
    {name: 'Caneta', amount: 10, price: 7.99},
    {name: 'Impressora', amount: 0, price: 649.50},
    {name: 'Caderno', amount: 4, price: 27.10},
    {name: 'Lapis', amount: 3, price: 5.82},
    {name: 'Tesoura', amount: 1, price: 19.20},
]


const getName = item => item.name
const qtdMaiorQueZero = item => item.amount > 0
// const qtdMaiorIgualAZero = item => item.amount >= 0
// const qtdMuitoGrande = item => item.amount >= 1000

const nomeItensValidos = carrinho
    .filter(qtdMaiorQueZero)
    .map(getName)

console.log(nomeItensValidos)

Array.prototype.myFilter = function(fn){

    const newArray = []
    
    for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)){
        newArray.push(`-->${this[i]}`)
    }

    }

    return newArray

}

const nomeItensValidos2 = carrinho
    .myFilter(qtdMaiorQueZero)
    //.map(getName)

console.log(nomeItensValidos2)
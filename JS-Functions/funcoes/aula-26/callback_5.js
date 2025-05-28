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
    .reduce(somar, 0)

console.log(totalGeral)
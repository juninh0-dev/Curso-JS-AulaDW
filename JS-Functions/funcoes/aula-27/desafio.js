const carrinho = [
    { name: 'Caneta', amount: 10, price: 7.99, fragil: true },
    { name: 'Impressora', amount: 1, price: 649.50, fragil: true },
    { name: 'Caderno', amount: 4, price: 27.10, fragil: false },
    { name: 'Lapis', amount: 3, price: 5.82, fragil: false },
    { name: 'Tesoura', amount: 1, price: 19.20, fragil: true },
]

// filter, map, reduce

// 1. fragil: true
// 2. amount * price -> total
// 3. media totais


const isFragil = item => item.fragil
const getTotal = item => item.amount * item.price
const getMedia = (acc, el) => {
    const novaQntde = acc.amount + 1
    const novoTotal = acc.total + el
    console.log({ acc, el })
    return {
        amount: novaQntde,
        total: novoTotal,
        media: novoTotal / novaQntde
    }
}

const mediaIncial = {amount: 0, total: 0, media: 0}

const media = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(getMedia, mediaIncial)
    .media

console.log(`A média é ${media}`)
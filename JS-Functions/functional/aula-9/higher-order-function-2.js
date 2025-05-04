// curing

function finalPrice(tax, price){
    return function(price){
        return price * (1 + tax)
    }
}

const nyFianlPrice = finalPrice(0.0875)

console.log(finalPrice(0.0875)(25.1))
console.log(finalPrice(0.0875)(21.7))
console.log(finalPrice(0.0875)(107.9))
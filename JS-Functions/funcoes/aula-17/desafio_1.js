//somar (3)(4)(5)
function somar(a = 0){
    return function(b = 0){
        return function(c = 0){
            return a + b + c
        }
    }
}

let result = somar(3)(4)(5)
console.log(result)

// fn -> 3 * 7
// fn -> 3 + 7 
// fn -> 3 - 7
//Calcular(3)(7)(fn)

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x,y)
        }
    }
}

function subtrair(a, b){
    return a - b
}

function mult(a, b){
    return a * b
}

const result1 = calcular(10)(5)(subtrair)
console.log(result1)

const result2 = calcular(10)(5)(mult)
console.log(result2)
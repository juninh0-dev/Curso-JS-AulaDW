//Function declaration

function sayHello() {
    console.log('Hello, World!')
}

sayHello()

function sayHelloTo(name) {
    console.log(`Hello ${name}! ` + name)

}

sayHelloTo('Mike')

function returnHi() {
    return 'Hi!'
}

let greetting = returnHi()
console.log(greetting)
console.log(returnHi())

function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))
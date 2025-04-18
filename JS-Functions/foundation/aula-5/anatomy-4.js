
// Anonymous function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c){
    let x = 3
    console.log(`Resultado: ${a + b + c}`)
    console.log(x)
})(1,2,3);

//???(1,2,3) Não é possível chamar a função que é anonima
// É possiível chamar a funcção de forma imediata colocando os parametos
// logo abaixo da função

//Não é possível chamar um variável let que está dentro da função por fora ex.:
//console.log(x)
//pois ela está dentro do escopo, para chamar essa variável é necessário que
//chame o console dentro da própria função

// Cada variável x é independente quando está dentro da função e função determina um scopo
(function (){
    let x = 300 
    console.log(x)
    // É comum não ter parametros quando se tem uma função que é imediatamente invocada
})(); // Nesse caso é necessário dar ponto e virgula se não dá erro

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();
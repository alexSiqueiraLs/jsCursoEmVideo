//console.log(5>7) //o resultado são valores booleanos -true ou false
//console.log(5<7) // 5 é menor que 7?
//console.log(7 != '7') //7 é diferente de 7?
//console.log(7 !== '7') //DESIGUAL RESTRITO
//console.log(5 == '5') //é igual?
//console.log(5 === '5') //igualdade restrita em valor e tipo

//logicos
// ! negação  && conjunção || disjunção
// ! operador unario, só aceita uma expressão true ou false
// && verdadeiros se todas forem verdadeiras 
// || se uma for verdadeiras para o resultado ser verdadeiro
//var a = 5
//var b = 8

//var c = a>b && b%2==0
//console.log(c)

//precedencia
// primeiro a ordem é os operadores aritméticos
//segundo operadores relacionais
//e por fim os logicos, que seguem a ordem ! && depois o ||

//operador ternario
//? e :
//teste ? true : false
var media = 5.5
var rs = media>7?'APROVADO':'REPROVADO'
console.log(rs)

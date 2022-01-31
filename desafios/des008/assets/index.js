function reajustar() {
let nome = prompt('qual é o nome do funcionario:')
let salario = prompt(`qual é o salario do ${nome}`)
let aumento = prompt(`o salario do ${nome} vai ser reajustado em qual porcentagem`)
let res = document.querySelector('.res')
let porc

porc = Number(aumento*salario/100)
soma = Number(salario)+Number(porc)
soma.toString().replace(".", ",")

res.innerHTML = `<h2>${nome} recebeu um aumento de salarial<h2>`
res.innerHTML += `<p>o salario atual era de R$ ${salario.toString().replace(".", ",")}</p>`
res.innerHTML += `<p>com o aumento de ${aumento}%, o salario vai aumentar ${porc} no proximo mes</p>`
res.innerHTML += `<p>a partir dai ${nome} vai passar a ganhar ${soma.toFixed(2)}`
}
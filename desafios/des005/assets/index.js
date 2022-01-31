var num = document.querySelector('#numero')
var res = document.querySelector('#res')

function tabuada() {
    res.innerHTML = ""
    let numero = num.value
    var i = 1
    var y = 9
    var soma;

    for (i;i<=10;i++) {
        soma = numero*i
        res.innerHTML += `${numero} x ${i} = ${soma.toFixed(1)} <br/>`
    }
}
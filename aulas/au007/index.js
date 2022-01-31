/*var txtvel = document.querySelector('.txtvel')
var res = document.querySelector('.res')

function calcular() {
    var vel = Number(txtvel.value)
    res.innerHTML = `<p> sua velocidade é de ${vel} km </p>`

    if ( vel > 60) {
        res.innerHTML += 'voce esta <strong>Multado</strong> por excesso de velocidade'
    }
    res.innerHTML += `<p> dirija com cuidado! </p>`
}*/

var vel = document.querySelector('.txtvel')
var rest = document.querySelector('.res')

function res() {
    var velN = Number(vel.value)
    if (velN>60) {
        rest.innerHTML = `<p>sua velocidade esta acima do permitido voce foi multado</p`
    } else {
        rest.innerHTML = `<p>sua velocidade é ${velN}km</p>`
    }
} 
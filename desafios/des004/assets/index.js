var inicio = document.querySelector('.inicio');
var fim = document.querySelector('.fim');
var passo = document.querySelector('.passo');

function contar() {
var res = document.querySelector('.res')
var inic = Number(inicio.value)
var final = Number(fim.value)
var pas = Number(passo.value)
var soma = inic;

res.innerHTML = ""

if (inicio.value == "" || fim.value=="") {
    res.innerHTML = 'Campo vazio'
} else if (pas>=final) {
    res.innerHTML = 'passo invalido'
} else {
    if (pas === 0 || pas == "") {
        pas=1
        alert('passo recebe 1')
    }
    res.innerHTML = 'contando: <br />'
    for (inic; soma<=final; inic++) {
        res.innerHTML += `${soma} 👉 `
        soma = soma+pas;
    }
    res.innerHTML += '🏴'
}


}
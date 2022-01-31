let colecao = []
let numero = document.querySelector('#numero')
let numeroAd = document.querySelector('#numerosAd')
let text = document.querySelector('#text')

function analisar() {
    let num = numero.value;
    //.includes retorna true caso ele encontre o elemento na array
    if (num>100 || num<=0 || colecao.includes(num)) {
        alert('numero fora dos limites ou existente')
        return
    } else {
    var item = document.createElement('option')
    item.text = `O valore ${num} foi adicionado`
    numeroAd.appendChild(item)
    colecao.push(num)
    }
    numero.value = "" //toda vez que adiciona um numero, limpa a caixa do input
    numero.focus()
    text.textContent = "" //toda que adicinar um numero limpa a div#text que mostra os resultados
 }


 function finalisar() {
     if (colecao.length == 0) {
         alert('não ha valores')
     } else {
    let min = Math.min(...colecao);
    let max = Math.max(...colecao);
    
    let soma = 0
    for(let s=0;s<colecao.length;s++) {
        soma = Number(soma)+Number(colecao[s])
    }
    let media = soma/colecao.length;
    
    text.innerHTML = ""
    text.innerHTML += `Ao todo tem ${colecao.length} numeros cadastrados <br />`
    text.innerHTML += `O maior valor informado é ${max} <br />` 
    text.innerHTML += `O menor valor informado é ${min} <br />`
    text.innerHTML += `A soma dos numeros é ${soma} <br />`
    text.innerHTML += `A media dos valores é ${media.toFixed(2)}`
    return
     }
 }


 




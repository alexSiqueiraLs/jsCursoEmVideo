function tabuada () {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {
        alert('erro')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = "" //limpa toda vez que gerar a tabuada
        while(c<=10) {
            let item = document.createElement('option') //cria um option no select
            item.text = `${n} x ${c} = ${n*c}` //adiciona ao option criado a multiplicação da tabuada
            tab.appendChild(item) // adiciona tudo ao select do html
            c++
        }
    }
}
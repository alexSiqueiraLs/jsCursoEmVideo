
function contar() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'impossivel contar'
    } else {
        res.innerHTML = 'contando: <br />'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p<=0) {
            alert('impossivel contar. Passo recebe 1')
            p = 1
        }

        //contagem crecente
        if (i<f) {
        for(var c = i;c<= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
    } else { //contagem regressiva
        for(let c = i; c>=f;c -= p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
    }
        res.innerHTML += ` \u{1F3C1}`
    }
}
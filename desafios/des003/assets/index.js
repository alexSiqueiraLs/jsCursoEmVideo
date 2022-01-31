function verificar() {
    var data = new Date
    var ano = data.getFullYear() //pega o ano atual em que estamos
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div.res')

    if (fano.value.length == 0 || fano.value>ano) { //a primeira verifica se esta vazia e a segunda ve se o ano colocado e maiore que o atual
        /*window.alert('verifique os dado e tente novamente')*/
        res.innerHTML = `dados invalidos`
    } else {
        var fsex = document.getElementsByName('radsex') //esta selecionando o radio, se colocar [0] depois dos parenteses, ele selecionara o masculino
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria um elemento img no html
        img.setAttribute('id', 'foto') //atribui um id na img
        if (fsex[0].checked) {
            genero='homem'
            if (idade >=0 && idade<10) {
                //criança
                img.setAttribute('src', 'assets/imagens/pexels-bess-hamiti-35537.jpg')
                console.log('criança')

            } else if (idade<21) {
                //jovem
                img.setAttribute('src', 'assets/imagens/pexels-monstera-5384429.jpg')
            }else if (idade<50) {
                //adulto
                img.setAttribute('src', 'assets/imagens/pexels-nathan-cowley-1300402.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'assets/imagens/pexels-centre-for-ageing-better-7850133.jpg')
        }} if (fsex[1].checked) {
            genero='mulher'
            if (idade >=0 && idade<10) {
                //criança
                img.setAttribute('src', 'assets/imagens/pexels-jessica-lynn-lewis-189857.jpg')
                console.log('criança')
            } else if (idade<21) {
                //jovem
                img.setAttribute('src', 'assets/imagens/pexels-rodnae-productions-4911465.jpg')
            }else if (idade<50) {
                //adulta
                img.setAttribute('src', 'assets/imagens/pexels-tatiana-bulgakova-10175661.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'assets/imagens/pexels-edu-carvalho-2050976.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adicionoi a div res a img criada para o if

    }
}

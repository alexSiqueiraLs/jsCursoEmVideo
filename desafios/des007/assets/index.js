let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
	if(Number(n) >= 1 && Number(n) <= 100) {
		return true
	} else {
		return false
	}
}

function inLista(n, l) {
	if (l.indexOf(Number(n)) != -1) {
		return true
	} else {
		return false
	}
}


function adicionar() {
	let nume = Number(num.value)
	console.log(valores)
	console.log(inLista(nume, valores))
	console.log(isNumero(nume))
	if(isNumero(nume) && !inLista(nume, valores)) {
		valores.push(nume)
		let item = document.createElement('option')
		item.text =`valor ${nume} adicionado`
		lista.appendChild(item)
	} else {
		window.alert('valor invalido ou ja encontrado')
	}
}

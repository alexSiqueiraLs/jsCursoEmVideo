var agora = new Date()
var diaSem = agora.getDay()
/*
 0 - dom
 1 - seg
 2 - ter
 3 - qua
 4 - qui
 5 - sex
 6 - sab
 */
console.log(diaSem)
switch(diaSem) {
	case 0:
	console.log('domingo')
	break
	case 1:
	console.log('segunda')
	break
	case 2:
	console.log('terça-feira')
	break
	case 3:
	console.log('quarta-feira')
	break
	case 4:
	console.log('quinta-feira')
	break
	case 5:
	console.log('sexta-feira')
	case 6:
	console.log('sabado')
	break
	default:
	console.log('data invalida')
}
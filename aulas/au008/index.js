/*var idade = 66
if (idade<16) {
	console.log('não vota')
} else {
	if (idade<=18 || idade>65){
		console.log('voto opcional')
	} else
	console.log('vota obrigatorio!')
}*/
var agora = new Date()//pegando a hora do sistema
var hora = agora.getHours()//pegando a hora da sistema
console.log(`agora são exatamente ${hora} horas`)
 if (hora>0 && hora<6) {
	console.log('boa madrugada!')
} else if (hora>6 && hora<12){
	console.log('bom dia!')
} else if (hora>12 && hora<18) {
	console.log('boa tarde!')
}else if (hora>18) {
	console.log('boa noite!')
}

let amigo = {nome: 'josé',
 sexo:'M',
  peso:85.4,
   engordar(p=0){
   	console.log('engordou')
   	this.peso += p //this esta referenciando o atributo peso no obj
   }}

amigo.engordar(-2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
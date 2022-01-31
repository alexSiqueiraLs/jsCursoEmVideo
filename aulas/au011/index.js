let num = [5,8,9,3]
num.push(1)
/*num.sort()
console.log(num)
console.log(` meu elemento tem ${num.length} posições`)
console.log(`o primeiro elemento da array é ${num[0]}`)
console.log()

repetição de array
console.log('estrutura de repetição com array')
for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}

repetição de array moderna
for(let pos in num) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/
let a = num.indexOf(7)
if (a==-1) {
    console.log('valor não encontrado')
} else {
    console.log(`o valor esta na posição ${a}`)
}
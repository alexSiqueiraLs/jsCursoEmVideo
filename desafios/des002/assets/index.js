function load() {
var horas = document.querySelector('.horas')
var img = document.querySelector('.img')
var dataSistema = new Date()
var horaSistema = dataSistema.getHours()

var text = horas.innerHTML = `<strong>Agora são ${horaSistema} horas</strong>`
if (horaSistema>6 && horaSistema<12) {
    img.innerHTML ='<img src="assets/img/manha.jpg">'
    document.body.style.background = 'orange'
} else if (horaSistema>=12 && horaSistema<18) {
    img.innerHTML = '<img src="assets/img/tarde.jpg">'
    document.body.style.background ='yellow'
} 
if (horaSistema>=18 && horaSistema<23) {
    img.innerHTML = '<img src="assets/img/anoite.jpg" alt="">'
    document.body.style.background = 'black'
}
}
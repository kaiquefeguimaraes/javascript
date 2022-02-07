var hour = new Date()
var atual = hour.getHours()
console.log(`Agora são ${atual} horas`)
if (atual < 12) {
    console.log("Bom dia")
} else if (atual <= 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}
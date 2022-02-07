function carregar() {
    var chamar = new Date
    var atual = chamar.getHours()
    var hour = document.getElementById("horas")
    var img = document.getElementById("imagem")
    hour.innerHTML = `Agora são ${atual} horas`
    
    if (atual >= 0 && atual < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (atual <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#013447'
    }
}

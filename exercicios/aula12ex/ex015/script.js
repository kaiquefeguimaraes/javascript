function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var born = document.getElementById('nasc')
    var answer = document.getElementById('resp')
    if (born.value.length == 0 || Number(born.value) > ano) {
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var sexy = document.getElementsByName('radsex')
        var idade = ano - Number(born.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexy[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'FotoBebeM.png'
            } else if (idade < 21) {
                img.src = 'FotoJovemM.png'
            } else if (idade < 50) {
                img.src = 'FotoAdultoM.png'
            } else {
                img.src = 'FotoIdosoM.png'
            }

        } else if (sexy[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = 'FotoBebeF.png'
            } else if (idade < 21) {
                img.src = 'FotoJovemF.png'
            } else if (idade < 50) {
                img.src = 'FotoAdultoF.png'
            } else {
                img.src = 'FotoIdosoF.png'
            }
        }
        answer.style.textAlign = 'center'
        answer.innerHTML = `Detectamos ${genero} com ${idade} anos`
        answer.appendChild(img)
    }
}


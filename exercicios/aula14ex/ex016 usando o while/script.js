function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var incr = document.getElementById('txtpas')
    var resp = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || incr.value.length == 0) {
        resp.innerHTML = 'Impossivel contar!'
    } else {
        resp.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(incr.value)
        if (p <= 0) {
            alert('Passo Inválido! Considerando o PASSO 1')
            p = 1
        }
        if (i <= f) {
            while (i <= f) {
                resp.innerHTML += ` ${i} \u{1F449}`
                i+=p
            }
        } else {
            while (i >= f) {
                resp.innerHTML += `${i} \u{1F449}`
                i-=p
            }
        }    
        resp.innerHTML += `\u{1F3C1}`
    }
}
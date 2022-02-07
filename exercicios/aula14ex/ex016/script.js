function contar() { 
    var ini = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var incr = document.getElementById('passo')
    var c = ini.value
    var resp = document.getElementById('res')
    if (ini.value.length == 0 || final.value.length == 0 || incr.value.length == 0) {
        resp.innerHTML = 'Impossivel contar!'
    } else {
        resp.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(final.value)
        var p = Number(incr.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando o PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for (i; i <= f; i += p) {
                resp.innerHTML += ` ${i} \u{1F449}`
            }           
        } else {
            //Contagem Regressiva
            for (i; i >= f; i -= p) {
                resp.innerHTML += `${i} \u{1F449}` 
            }
        }
        resp.innerHTML += `\u{1F3C1}`  
    }       
}

var num = document.getElementById('txtnum')
var lista = document.getElementById('flista')
var resp = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && ! inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resp.innerHTML = ''
    } else {
        alert('Valor Invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        resp.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resp.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resp.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resp.innerHTML += `<p>A media do valores digitados é ${media}</p>`
    }
}
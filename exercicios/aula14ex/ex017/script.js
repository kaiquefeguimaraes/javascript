function tabuada() {
    var num = document.getElementById('txttab')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Error! Digite os dados corretamente.')
    } else {
        var t = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            tab.appendChild(item)
            c += 1
        }
    }
}
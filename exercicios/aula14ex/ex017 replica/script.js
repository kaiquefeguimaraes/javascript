function tabuada() {
    var tab = document.getElementById('txttab')
    var sel = document.getElementById('seltab')
    var t = Number(tab.value)
    if (tab.value.length == '') {
        alert('Por favor digite um número!')
    } else {
        sel.innerHTML = ''
        for (var c = 1; c <= 10; c+=1) {
            var item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            sel.appendChild(item)
        }       
    }
}
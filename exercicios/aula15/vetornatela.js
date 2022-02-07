var valores = [8, 1, 7, 4, 2, 9]

/* for (pos = 0; pos < valores.length; pos += 1)
    console.log(`Na posição ${pos+1} está o valor ${valores[pos]}`) */

for (var pos in valores) {
    console.log(`Na posição ${pos} está o valor ${valores[pos]}`)
}
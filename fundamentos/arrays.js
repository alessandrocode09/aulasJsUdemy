const valores = [7.7, 8.9, 9.1, 8.4]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste','joaozinho',20.8275665543312)
console.log(valores)

console.log(valores.pop())
delete valores[5]
console.log(valores)

console.log(typeof valores)
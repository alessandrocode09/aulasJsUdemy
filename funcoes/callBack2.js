const notas = [7.7, 6.5, 5.2, 8.8, 3.6, 7.1, 9.0]


// Sem o uso do callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)


//Usando o callback

const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

// callback com arrow
const notasMenorQueSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQueSete)
console.log(notasBaixas3)
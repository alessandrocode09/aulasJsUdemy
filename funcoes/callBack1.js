const fabricantes = ["Mercedes", "Ferrari", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)) // forEach é a função callback

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // passar o primeiro parametro como parametro do array, para só depois imprimir o índice do array
    console.log(`${indice + 1}) ${nome}`)

})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ // passar o primeiro parametro como parametro do array, para só depois imprimir o índice do array
    console.log(`${indice + 1}) ${nome}`)

})
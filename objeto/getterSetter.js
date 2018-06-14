const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor){
        if(valor > this.valor){
            this._valor = valor
        }
    }
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //é ignorado pois o valor passado é menor do que o atual
console.log(sequencia.valor, sequencia.valor)

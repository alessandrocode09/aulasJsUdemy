// par nome/valor
const saudacao = 'Ola' // contexto léxico 1

function exec(){
    const saudacao = 'Opaaaa' // contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pare nome/valor
const cliente = {
    nome: 'Joao', 
    idade: 32,
    endereco: {
        logradouro: 'Rua dos Bobos',
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

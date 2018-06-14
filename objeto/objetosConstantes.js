// pessoa -> 123 -> {...} // ou seja, pessoa recebeu um endereço de memória que recebeu o valor igual o exemplo abaixo:
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 ->{...}
// pessoa = { nome: 'Ana' } VAI dá erro!!

/* 
O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas;
e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas.
Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado. 
*/
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua dos Bobos'
delete pessoa.nome
console.log(pessoa.nome)

//Criando um objeto com freeze 
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
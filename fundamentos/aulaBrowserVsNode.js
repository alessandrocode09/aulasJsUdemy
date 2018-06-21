let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'
this.f = 'joaozinho'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.f)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var e let!!!

//abc = 3 // nao fazer isso jamais!!!
//console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste'}*/
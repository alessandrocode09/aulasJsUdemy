const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))



/*
FUNÇÕES ARROW( => ) EXEMPLOS:
(param1, param2, ..., paramN) => {
   statements
}

 ou

param => {
    statments
}

 ou

param => expressions // equivalente à param => { return expressions; }

 ou

(param1, param2, ..., paramN) => (
    expressions
)*/
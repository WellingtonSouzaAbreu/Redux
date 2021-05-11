const text = 'Romário era um exelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/^r.*r$/gi)) // Problema do dotall
console.log(text.match(/^r[\s\S]*r$/gi)) // [\s\S] supre o '.' que não seleciona o \n
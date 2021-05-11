const text = 'Romário era um exelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/r/gi))
console.log(text.match(/^r/gi)) // Fora do conjunto ^ significa inicio de linha/string
console.log(text.match(/r$/gi)) // $ Significa fim de linha/string

console.log(text.match(/^r.*r$/gi)) // Problema do dotall
console.log(text.match(/^r(.|\n)*r$/gi))
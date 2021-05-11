const text = 'Pedrinho (filho de Pedro Silva) é doutor do ABC!'

console.log(text.match(/[(abc)]/gi)) // Não existe grupo () dentro de conjunto []
console.log(text.match(/([abc])/gi))
console.log(text.match(/(abc)/gi))

// Use grupos somente por necessidade, não por separação lógica
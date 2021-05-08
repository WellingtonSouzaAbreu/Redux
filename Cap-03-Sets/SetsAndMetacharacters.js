// \ -> escape
const text = '.$++?-'

console.log(text.match(/[+.?*$]/g)) // Dentro do conjunto os metacaracteres se comportam como literais
console.log(text.match(/[$-?]/g)) // Intervalo válido(range)

// Não é intervalo (range)
console.log(text.match(/[$\-?]/g))
console.log(text.match(/[\-?]/g))

// Pode precisar de escape dentro dos conjuntos: - [] ^
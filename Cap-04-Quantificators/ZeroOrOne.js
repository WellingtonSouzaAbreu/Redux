const text1 = 'De longe eu avistei o fogo e uma pessoa gritando FOGOOO!'
const text2 = 'There is a big fog in NYC'

// ? = zero ou um (opcional)

const regex = /fogo?/gi // Letra 'o' é opcional, pode ter zero ou um 'o'

console.log(text1.match(regex))
console.log(text2.match(regex))

// Test git clone

const text1 = 'De longe eu avistei o fogo e uma pessoa gritando FOGOOOO!'
const text2 = 'There is a big fog in NYC'

// * = Zero ou mais 

const regex = /fogo*/gi // Pode ter um ou mais letras 'o'

console.log(text1.match(regex))
console.log(text2.match(regex))
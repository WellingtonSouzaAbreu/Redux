// d = Números [0-9]
// D = Não números [^0-9]
// w = [a-bA-Z0-9_]
// W = [^a-bA-Z0-9_]
// s = Somente espaços ([\t\n' '\r\f])
// S = Somente não espaços ([\t\n' '\r\f])

const text = `1,2,3,4,5,6,a.b\r\f c!d?e	-
f_g`

console.log(text.match(/\d/g))
console.log(text.match(/\D/g))

console.log(text.match(/\w/g))
console.log(text.match(/\W/g))

console.log(text.match(/\s/g))
console.log(text.match(/\S/g))
const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g))

console.log(text.match(/[Z-a]/g)) // intervalos usam a orde da tabela ASC

// Deve-se respeitar a ordem da tabela UNICODE
// console.log(text.match(/[z-a]/)) // Gera erro na ordem
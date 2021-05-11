const text = 'a   b'

console.log(text.match(/a   b/))
console.log(text.match(/a\s\s\sb/))

// No futuro...
console.log(text.match(/a\s+b/))
console.log(text.match(/a {3}b/))
console.log(text.match(/a\s{3}b/))

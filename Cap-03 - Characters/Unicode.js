// No inicio...
// Um byte(8bits) - 256 caracteres
// Símbolos, Pontuações, A-Z, a-z, 0-9

// Dois bytes (16 bits) = 65000+ caracteres
// +Símbolos, +Pontuações, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes variável - Expansível
// Suporta mais de 1 Milhão de caracteres

const text = 'aΦ'

console.log(text.match(/\u03a6/))
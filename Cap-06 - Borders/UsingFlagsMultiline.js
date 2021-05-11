const text = `
Leo é muito legal
Emanuael foi jogar em Sergipe
Bianca é casada com Habib
`
console.log(text.match(/\n/g))
console.log(text.match(/^(\w).+\1$/gi))
console.log(text.match(/^(\w).+\1$/gim)) // m => multiline - Traca cada linha de forma independente
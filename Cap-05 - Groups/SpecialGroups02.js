const text = 'supermercado superação hiperMERCADO'

console.log(text.match(/(?:super)[\wÀ-ú]+/gi).join(' '))

// Positive lookbehind
console.log(text.match(/(?<=super)[\wÀ-ú]+/gi).join(' '))

// Negative lookbehind
console.log(text.match(/(?<!super)mercado/gi).join(' '))
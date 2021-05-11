const text = 'João é calmo, mas no trânsito fica nervoso.'

console.log(text.match(/[\wÀ-Ú]+/gi))

// Positive lookahead
console.log(text.match(/[\wÀ-Ú]+(?=,)/gi))
console.log(text.match(/[\wÀ-Ú]+(?=\.)/gi))
console.log(text.match(/[\wÀ-Ú]+(?= fica)/gi))

// Negative lookahead
console.log(text.match(/[\wÀ-Ú]+\b(?!,)/gi)) // Ignora o que termina com ','.


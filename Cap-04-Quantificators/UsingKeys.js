const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir um quantificador usa-se { }
console.log(text.match(/\d{1,2}/g)) // Mínimo 1 e máximo 2
console.log(text.match(/[0-9]{2}/g)) // Exatamente 2
console.log(text.match(/\d{1,}/g)) // 1 ou n

console.log(text.match(/\w{7}/g))
console.log(text.match(/[\wõ]{7,}/g))

// No futuro
console.log(text.match(/\b\d{1,2}\b/g))
console.log(text.match(/\b[\wõ]{7}\b/g)) // Não corta palavras pela metade
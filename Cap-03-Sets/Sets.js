const text = '1,2,3,4,5,6,a.b c!d?e[f'

// Para definir uma classe (ou conjunto) de caracteres usa-se []

const regexPairs = /[02468]/g
console.log(text.match(regexPairs))

const text2 = 'João não vai passear na moto'
const regexWithAndWithoutAccent = /n[aã]/g
console.log(text2.match(regexWithAndWithoutAccent))
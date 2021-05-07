// . ? * + = ^ $ | [] {} / :

const text = '1,2,3,4,5,6,a.b c!d?e'

const regexPoint = /\./g

console.log(text.split(regexPoint))

const regexSymbols = /,|\.|\?|!| /g
console.log(text.split(regexSymbols))
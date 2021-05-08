// ^ = Negação

const text = '1,2,3,a.b c!d?e[f'

// console.log(text.match(/\D/g))
// console.log(text.match(/[^0-9]/g))

console.log(text.match(/[^\d!\?\[\s,\.]/g))

const text2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(text2.match(/[^!-/:-@\s]/g))

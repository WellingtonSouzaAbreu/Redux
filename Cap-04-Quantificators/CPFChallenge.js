const text = `
CPF dos aprovados: 
    - 048.415.792-22
    - 452.415.792-22
    - 222.415.792-22`

console.log(text.match(/[\d\.-]{13}.+/g)) // Minha solução
console.log(text.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g))
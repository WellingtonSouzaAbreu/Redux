// O ponto não resolve o /n (quebra de linha)

const text = 'Bom\ndia' 

console.log(text.match(/./gi))
console.log(text.match(/..../gi)) // Não considera o /n como algo

// dotall - Algumas linguagens tem uma flaxg /exp/s, mas JS não!
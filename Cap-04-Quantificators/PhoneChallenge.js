const text = `
Lista telefônica: 
    - (11) 9 84465997
    - 98446-5522
    -94456-4456
    - (69) 998446599`

console.log(text.match(/(\(\d{2}\))? ?\d\s?\d{4}-?\d{4}/g))
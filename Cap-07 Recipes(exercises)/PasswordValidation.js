const text = `
123456
cod3r
QUASE123!
#essaSenhaÉGrande1234

Foi1234!
FOi12345
#0pA1
`

console.log(text.match(/^.{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(text.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#%$!^&*+]).{6,20}$/gm))

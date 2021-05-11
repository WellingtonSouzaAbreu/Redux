const text1 = 'dia diatonico diagrama media wikipedia bom_dia melodia radial'

console.log(text1.match(/\bdia\w+/gi))
console.log(text1.match(/\w+dia\b/gi))
console.log(text1.match(/\bdia\b/gi))
console.log(text1.match(/\w+dia\w+/gi))

// Borda é não \w, que é [^A-Za-z0-9]...  Temos problemas com os acentos
// Alguns acentos são considerados como bordas

const text2 = 'dia diatônico diagrama, média wikipédia bom-dia melodia radial'

console.log(text2.match(/\bdia\b/gi))
console.log(text2.match(/(\S*)?dia(\S*)?/gi)) // A vírgula entrou
console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) // Chama somenta letras e acentos([\wÀ-ú-]) ignora a vírgula

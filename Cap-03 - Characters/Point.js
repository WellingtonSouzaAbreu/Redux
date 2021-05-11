 // . é um coringa

 const text = '1,2,3,4,5,6,7,8,9,0'

 console.log(text.match(/1.2/g))
 console.log(text.match(/1..2/g))
 console.log(text.match(/1..,/g))

 const notes = '8.3.7.1,8.8,10.0'

 console.log(notes.match(/8../g))
 console.log(notes.match(/.\../g))
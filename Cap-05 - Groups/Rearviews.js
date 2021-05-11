const text1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(text1.match(/<(\w{1,6})>.*<\/\1>/g))

const text2 = 'Lentamente é mente muito lenta'
console.log(text2.match(/(lenta)(mente).*\2.*\1/gi))
console.log(text2.match(/(?:lenta)(mente).*\1/gi)) // ?: Faz com que o grupo não seja guardado como retrovisor

console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi, '$2')) // $2 => Substitui pelo 2º retrovisor
console.log(text2.replace(/(lenta)(mente)/gi, 'abc$2def'))
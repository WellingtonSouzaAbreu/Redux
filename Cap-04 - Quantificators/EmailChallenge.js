const text = `
Os emails dos candidatos são:
 - fulano@gmail.com
 - xi.co@gmail.com.br
 - cod3r@gmail.com.br
 - cod_3r@gmail.com.br
 - cod-3r@gmail.com.br`

console.log(text.match(/[\w.\-_]+@\w+\.\w+(\.\w+)?/gi))
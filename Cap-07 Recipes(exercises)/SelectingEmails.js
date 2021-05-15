const text = `
Os e-mails dos convidados são:
 - fulado@cod3r.com.br
 - xico@gmal.com
 - joao@empresa.info.br
 - maria_silva@registro.br
 - rafa.sampaio@yahoo.com
 - fulano+de+tal@escola.ninja.br
`

console.log(text.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))
console.log(text.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g).length)
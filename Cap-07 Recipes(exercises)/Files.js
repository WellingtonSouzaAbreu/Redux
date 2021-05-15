const fs = require('fs')

const read = fileName => {
    return fs.readFileSync(`${__dirname}/originals/${fileName}`, {encoding: 'utf8'})
}

const write = (fileName, content) => {
    const dirname = `${__dirname}/changeds`

    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${fileName}`, content, {encoding: 'utf8'})
}

module.exports = {read, write}
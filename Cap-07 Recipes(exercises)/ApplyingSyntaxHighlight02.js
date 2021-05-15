const applyColor = (text, regex, color) => {
    return text.replace(regex, `<span style="color: #${color};"><b>$1</b></span>`)
}

const files = require('./Files.js')
const text = files.read('sourceCode.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let code = text.match(codeRegex)[0]

// Strings...
code = applyColor(code, /(\".*\")/g, 'ce9178')

// Reserved Words
code = applyColor(code, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// Types
code = applyColor(code, /\b(void|int)\b/g, '1385e2')

// Comments multiline
code = applyColor(code, /(\/\*[\S\s]*\*\/)/g, '267703')

// Comments inline
code = applyColor(code, /(\/\/.*?\n)/g, '267703')

const contentFinal = text.replace(codeRegex, code)

files.write('sourceCode.html', contentFinal)












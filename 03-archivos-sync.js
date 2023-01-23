const fs = require('fs')
const filename = './ejemplo.txt'
fs.writeFileSync(filename, 'Saludos de Shakira!')
if (fs.existsSync(filename)) {
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log(contenido)
    fs.appendFileSync(filename, '\n\tY también de Piqué')
    fs.unlinkSync(filename, 'utf-8')
} else {
    console.log('El archivo no existe')
}
console.log('END')

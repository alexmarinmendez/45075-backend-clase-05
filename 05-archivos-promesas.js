const fs = require('fs')
const filename = './ejemplo.txt'

const operacionesAsync = async() => {
    await fs.promises.writeFile(filename, 'Saludos de Shaki\n')
    let contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    await fs.promises.appendFile(filename, 'Saludos a todos\n')
    // await fs.promises.unlink(filename)
}

operacionesAsync()
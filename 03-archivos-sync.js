const fs = require('fs')

// fs.writeFileSync('./ejemplo.txt', 'Saludos tambien de Piqué!')

if (fs.existsSync('./ejemplo.txt')) {
    const contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido)
} else {
    console.log('El archivo no existe')
}

console.log('END')

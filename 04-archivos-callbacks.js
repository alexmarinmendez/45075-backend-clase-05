const fs = require('fs')
const filename = './ejemplo.txt'

fs.writeFile(filename, 'Saludos de Clara\n', error => {
    if (error) return console.log('hubo un error al escribir ')
    console.log('Archivo escrito correctamente!')
    fs.appendFile(filename, 'Saludos de Facundo', error => {
        if (error) return console.log('hubo un error al actualizar el archivo ')
        console.log('Archivo actualizado')
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if (error) return console.log('hubo un error al leer el archivo ')
            console.log(contenido)
            fs.unlink(filename, error => {
                if (error) return console.log('hubo un error al eleiminar el archivo ')
                console.log('Borrado exitosamente')
            })
        })
    })
})

console.log('FIN')
const fs = require('fs')

const obj = {
    name: "Shakira",
    lastname: "Carreon",
    age: 44
}

fs.writeFileSync('./ejemplo.json', JSON.stringify(obj, null, 2))

let contenido = fs.readFileSync('./ejemplo.json', 'utf-8')
console.log(JSON.parse(contenido))



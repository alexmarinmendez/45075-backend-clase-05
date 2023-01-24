const fs = require('fs')

let contenido = fs.readFileSync('./package.json', 'utf-8')
let obj = JSON.parse(contenido)
obj.author = "Alex Marin Mendez"
// console.log(obj)

fs.writeFileSync('./package.json', JSON.stringify(obj, null, 2))




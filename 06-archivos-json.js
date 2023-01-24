const fs = require('fs')

const obj = {
    name: "Shakira",
    lastname: "Carreon",
    age: 44
}

fs.writeFileSync('./ejemplo.json', JSON.stringify(obj, null, 2))



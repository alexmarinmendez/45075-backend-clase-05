const fs = require('fs')

let users = []

class UserManager {
    constructor(filename) {
        this.filename = filename
    }

    createUser = async(name, lastname, age) => {
        let id
        if (users.length === 0) id = 1
        else id = users[users.length-1].id + 1 
        users.push({id, name, lastname, age})
        fs.writeFileSync(this.filename, JSON.stringify(users, null, 2))
    }
}

async function desafio() {
    const manager = new UserManager('users.json')
    await manager.createUser('Alex', 'Marin', 45)
    await manager.createUser('Shakira', 'Leon', 44)
}

desafio()
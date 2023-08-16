const connectionSQLite = require('..')
const createUserTable = require('./createUser')

require('./createUser')

async function migrationsRun(){
    const schemas = [
        createUserTable
    ].join('')

    connectionSQLite().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = migrationsRun
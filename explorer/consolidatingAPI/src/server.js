require('express-async-errors')
const express = require('express')
const app = express()
const route = require('./routes')
const AppError = require('./utils/AppError')
const migrationsRun = require('./database/sqlite/migrations')

migrationsRun()

//permite que o server receba requisições em formato JSON
app.use(express.json())

app.use(route)

app.use((error, req, res, next) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error)
    
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3100
app.listen(PORT, () => console.log(`Server running in port ${PORT}`))
const { Router } = require('express')

const routes = Router()
const userRoutes = require('./user.route')

routes.use("/users", userRoutes)

module.exports = routes
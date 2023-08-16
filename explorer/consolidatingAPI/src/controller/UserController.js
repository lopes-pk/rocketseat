const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')

class UserController {
    async create(req, res) {
        const { name, email, password } = req.body

        const db = await sqliteConnection()
        const checkUserExist = await db.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExist) {
            throw new AppError("E-mail is already being used")
        }

        const encryptedPassword = await hash(password, 8)

        await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, encryptedPassword])

        return res.status(201).json()
    }

    async update(req, res) {
        const { id } = req.params

        const { name, email, password, old_password } = req.body

        const db = await sqliteConnection()

        const user = await db.get("SELECT * FROM users WHERE id = (?)", [id])

        if (!user) {
            throw new AppError("User not exist")
        }

        const emailInUse = await db.get("SELECT * FROM users WHERE email = ?", [email])

        if(emailInUse && emailInUse.id !== user.id){
            throw new AppError("Email is already in use")
        }

        user.email = email
        user.name = name

        if (password && !old_password) {
            throw new AppError("Old password is required")
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) {
                throw new AppError("Old password incorrect")
            }

            user.password = await hash(password, 8)
        }


        await db.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            updated_at = ?
            WHERE id = ? `, [user.name,user.email ,user.password , new Date(), id]
            )

        res.status(201).json()
    }
}

module.exports = UserController
const { hash, compare } = require('bcryptjs')
const sqliteConnection = require('../database/sqlite')
const AppError = require('../utils/AppError')

class UserController{
    async create(req,res){
        const { name, email, password } = req.body

        const database = await sqliteConnection()
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExist){
            throw new AppError("E-mail is already being used")
        }
        
        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return res.status(201).json()
    }

    async update(req, res){
        const { name, email, password, old_password } = req.body
        const { id } = req.params

        const database = await sqliteConnection()
        const user =  await database.get("SELECT * FROM users WHERE id = (?)",[id])

        if(!user){
            throw new AppError("User not exist")
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id){
            throw new AppError("Email is already in use")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError("Enter the old password to set a new password")
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword){
                throw new AppError("old password does not match ")
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ?`,
        [user.name, user.email, user.password, id])

        return res.json()
    }
}

module.exports = UserController
const db = require('../db');
const crypt = require('bcrypt')
class UserController{
    async createUser (req, res, next) {
        const {login, password} = req.body;
        const pwdHash = await crypt.hash(password, 5);
        const newUser = await db.query(`INSERT INTO users (login, password) VALUES ($1, $2) RETURNING *`, [login, pwdHash]);
        //const checkUser = await db.query(`SELECT * FROM users where login = $1`, [login]);
        res.status('201').send('Пользователь успешно создан');
        //res.status('404').send('неправельный логин или пароль');
    }

    async getUser (req, res) {
        const allUsers = await db.query(`SELECT * FROM users`);
        res.json(allUsers.rows);
    }

    async oneUser (req, res) {
        const id = req.params.id;
        const user = await db.query(
            `SELECT * FROM users where id = $1`, [id]
        );
        res.json(user.rows[0]);
    }

    async updateUser (req, res) {
        const {id, login, password} = req.body;
        const update = await db.query(
            `UPDATE users set login = $1, password = $2 where id = $3`, [login, password, id]
            );
            res.json(update);
    }

    async deleteUser (req, res) {
        const id = req.params.id;
        const delUser = await db.query(
            `DELETE FROM users where id = $1`, [id]
        );
        res.send('Пользователь удалён');
    }
}

module.exports = new UserController();
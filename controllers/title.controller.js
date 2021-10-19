const db = require('../db');
class TitleController{
    async createTitle (req, res) {
        const {title_name} = req.body;
        const newTitle = await  db.query(`INSERT INTO level_title (title_name) VALUES ($1) RETURNING *`, [title_name]);
        res.status('201').send('Title создан')
    }

    async getTitle (req, res) {
        const allTitles = await db.query (`SELECT * FROM level_title`);
        res.status('200').json(allTitles.rows);
    }
    async oneTitle (req, res) {
        const id = req.params.id;
        const title = await db.query(
            `SELECT * FROM level_title where id = $1` [id]
        );
        res.status('200').json(title.rows[0]);
    }

    async updateTitle (req, res) {
        const {id, title_name} = req.body;
        const update = await db.query(`UPDATE users set title_name = $1 where id = $2`, [title_name, id]);
        res.status('200').json(update);
    }

    async deleteTitle (req, res){
        const id = req.params.id;
        const delTitle = await db.query(
            `DELETE FROM level_title id = $1`, [id]
        );
        res.status('200').json('Title удалён');
    }
}

module.exports = new TitleController();
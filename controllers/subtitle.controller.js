const db = require('../db');
class subtitleController{
    async createSubtitle (req, res) {
        const {subtitle_name} = req.body;
        const {workspace_name} = req.body;
        const newSubtitle = await db.query (`INSERT INTO level_subtitle (subtitle_name) VALUES ($1) RETURNING *`, [subtitle_name]);
        res.status('201').send('Subtitle создан');
    }

    async getSubtitle (req, res) {
        const allSubtitles = await db.query(`SELECT * FROM level_subtitle`);
        res.status('200').json(allSubtitles.rows);
    }

    async oneSubtitle (req, res) {
        const id = req.params.id;
        const oneSubtitle = await db.query(`SELECT * FROM level_subtitle`);
        res.status('200').json(oneSubtitle.rows[0]);
    }

    async updateSubtitle (req, res) {
        const {id, subtitle_name} = req.body;
        const update = await db.query(`UPDATE level_subtitle set subtitle_name = $1 where id = $2`, [subtitle_name]);
        res.status('200').json(update);
    }

    async deleteSubtitle (req, res){
        const id = req.params.id;
        const delSubtitle = await db.query(`DELEte FROM level_subtitle where id = $1`, [id]);
        res.status('200').sned('Subtile удалён');
    }
}

module.exports = new subtitleController();
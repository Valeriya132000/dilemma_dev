const db = require('../db');
var data = [];

class pageController{
    async createPage (req,res){
        const {page_name} = req.body;
        const newPage = await db.query(`INSERT INTO page (page_name) VALUES ($1) RETURNING *`,[page_name]);
        const newWorkspace = await db.query(`INSERT INTO workspace (workspace_name) VALUES ($1) RETURNING *`, [page_name]);
        res.status('201').send('Страница создана');
    }
    async getPage (req,res){
        const allPage = await db.query(`SELECT * FROM page`);
        res.json (allPage.rows);
    }
    async onePage (req,res){
        const id = req.params.id;
        const page = await db.query(`SELECT * FROM page where id = $1`,[id]);
        const workspace = await db.query(`SELECT * FROM workspace where id = $1`,[id]);
        res.status('200').json(page.rows[0]);

    }
    async updatePage (req,res) {
        const {id,page_name} = req.body;
        const update = await db.query(`UPDATE page set page_name = $1 where id = $2 `,[page_name,id]);
        res.json(update);
    }
    async deletePage (req,res) {
        const id = req.params.id;
        const delPage = await db.query(`DELETE FROM page where id = $1`,[id]);
        res.send('Страница удалена');
    }
}

module.exports = new pageController();
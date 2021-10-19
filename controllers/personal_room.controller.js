const db = require('../db');
class personal_roomController{
    async createPRoom (req, res) {
        const {} = req.body;
        const {personal_room_name} = req.body;
        const newPRoom = await db.query (`INSERT INTO personal_room (personal_room_name) VALUES ($1) RETURNING *`, [personal_room_name]);
        res.status('201').send('Personal_room создана');
    }

    async getPRoom (req, res) {
        const allPRooms = await db.query(`SELECT * FROM personal_room`);
        res.status('200').json(allPRooms.rows);
    }

    async onePRoom (req, res) {
        const id = req.params.id;
        const onePRoom = await db.query(`SELECT * FROM personal_room`);
        res.status('200').json(onePRoom.rows[0]);
    }

    async updatePRoom (req, res) {
        const {id, personal_room} = req.body;
        const update = await db.query(`UPDATE personal_room set personal_room_name = $1 where id = $2`, [personal_room]);
        res.status('200').json(update);
    }

    async deletePRoom (req, res){
        const id = req.params.id;
        const delPRoom = await db.query(`DELETE FROM personal_room where id = $1`, [id]);
        res.status('200').send('personal_room удалён');
    }
}

module.exports = new personal_roomController();
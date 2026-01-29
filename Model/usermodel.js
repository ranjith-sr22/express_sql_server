import db from '../Db/db.js';
const tableName = 'userss';

class UserModel {
    static async createUser(name, email, password) {
        const sql = `INSERT INTO ${tableName} (name, email, password) VALUES (?, ?, ?)`;
        const [result] = await db.execute(sql, [name, email, password]);

        return result.insertId;
    }
}
export default UserModel;
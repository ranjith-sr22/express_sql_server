import db from '../Db/db.js';
const tableName = 'users';

class UserModel {
    static async createUser(name, email, password) {
        const sql = `INSERT INTO ${tableName} (name, email, password) VALUES (?, ?, ?)`;
        const [result] = await db.execute(sql, [name, email, password]);

        return result.insertId;
    }
    static async getAllUsersmodel(){
        const sql = `SELECT * FROM ${tableName}`
        const[rows]= await db.execute(sql);
        return rows;
    }
    static async updateUsermodel(id,{password}){
        const sql = `UPDATE ${tableName} SET password=? WHERE id=?`
        const [update] = await db.execute(sql, [password,id])
        return update.affectedRows;

    }
    static async deleteUserModel(id) {
    const sql = `DELETE FROM ${tableName} WHERE id = ?`
    const [result] = await db.execute(sql, [id]);
    return result.affectedRows;
}

}
export default UserModel;
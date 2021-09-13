import { Sequelize } from "sequelize";

const  db = new Sequelize('meditech', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
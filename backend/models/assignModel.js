import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Assign = db.define('assign', {
    invoiceid:{
        type:DataTypes.INTEGER
    },
    nic:{
        type:DataTypes.STRING
    },
    date:{
        type:DataTypes.DATE,
        defaultValue: Date.now()
    },
    porterid:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING,                
        defaultValue:"Pending"
    }
},{
    freezeTableName: true
});

export default Assign;
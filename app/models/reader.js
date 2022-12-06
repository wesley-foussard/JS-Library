const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/database");

class Reader extends Model { };
Book.init({
    pseudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "reader"
}
);
module.exports = Reader;
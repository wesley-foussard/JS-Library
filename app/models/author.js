const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/database");

class Author extends Model { };
Book.init({
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastname: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nationality: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize,
    tableName: "author"
}
);
module.exports = Author;
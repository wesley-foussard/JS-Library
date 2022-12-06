const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/database");

class Genre extends Model { };
Genre.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    subgenre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "genre"
}
);
module.exports = Genre;
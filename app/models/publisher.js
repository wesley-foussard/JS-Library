const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/database");

class Publisher extends Model { };
Publisher.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    website: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize,
    tableName: "publisher"
}
);
module.exports = Publisher;
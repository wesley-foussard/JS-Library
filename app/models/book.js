const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/database");

class Book extends Model { };
Book.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cover: {
        type: DataTypes.TEXT,
    },
    publication: {
        type: DataTypes.DATE,
    },
    ISBN: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "book"
}
);
module.exports = Book;
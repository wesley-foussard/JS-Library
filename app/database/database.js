const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`,
    {
        define: {
            createdAt: "created_at", updatedAt: "updated_at"
        }
    })
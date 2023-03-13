const Sequelize = require("sequelize");

module.exports = new Sequelize(
    process.env.SQL_DB,
    process.env.SQL_USER,
    process.env.SQL_PW,
    {
        host: process.env.SQL_HOST,
        dialect: process.env.SQL_DIALECT
    }
);
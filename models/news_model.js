const Sequelize = require("sequelize");
const sequelize = require("../bin/db");

module.exports = sequelize.define("news", {
    _id: {
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(255)
    },
    content: {
        type: Sequelize.STRING(255)
    },
    date: {
        type: Sequelize.DATE()
    }
},
{
    timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
    createdAt: false, // if don't want createdAt
    updatedAt: false // if don't want updatedAt
});
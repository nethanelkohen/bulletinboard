var Sequelize = require("sequelize");

var sequelize = new Sequelize({
    username: process.env.DB_USER,
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
});

var Messages = sequelize.define('message',{
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    body: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
});

Messages.sync();

module.exports = Messages;

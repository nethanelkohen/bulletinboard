var Sequelize = require("sequelize");

var sequelize = new Sequelize({
    username: 'nethanelkohen',
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'bulletinboard'
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
        type: Sequelize.DATEONLY
      }
});

Messages.sync();

module.exports = Messages;

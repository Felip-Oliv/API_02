const sequelize = require('sequelize');

const database = new sequelize('NODE_MVC_API', 'root', 'Sup@1998',
{
    dialect:'mysql', host:'localhost', port:3306

});

database.sync();

module.exports = database;

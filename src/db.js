const sequelize = require('sequelize');

const database = new sequelize('api', 'root', 'Sup@1998',
{
    dialect:'mysql', host:'localhost', port:3306

});

database.sync();

module.exports = database;

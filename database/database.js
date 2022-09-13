const Sequelize = require ('sequelize');

const connection = new Sequelize('eternityls','root','deco2011',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
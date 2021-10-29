const { Sequelize } = require('sequelize');
const sequelizeConfig = require('../config/database');
const UserModel = require('../models/UserModel');

const connection = new Sequelize(sequelizeConfig);

UserModel.init(connection);

const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = connection;

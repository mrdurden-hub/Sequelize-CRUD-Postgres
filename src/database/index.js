const { Sequelize } = require('sequelize');
const sequelizeConfig = require('../config/database');
const UserModel = require('../models/UserModel');
const FotoModel = require('../models/Foto');

const models = [UserModel, FotoModel];

const connection = new Sequelize(sequelizeConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

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

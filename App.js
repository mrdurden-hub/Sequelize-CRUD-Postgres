const express = require('express');
const homeRoute = require('./src/routes/homeRoutes');
const userRoute = require('./src/routes/userRoutes');
require('./src/database');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/', userRoute);
  }
}

module.exports = new App().app;

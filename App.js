const express = require('express');
const homeRoute = require('./src/routes/homeRoutes');
const userRoute = require('./src/routes/userRoutes');
const tokenRoute = require('./src/routes/tokenRoutes');
const fileRoute = require('./src/routes/fileRoutes');

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
    this.app.use('/', tokenRoute);
    this.app.use('/', fileRoute);
  }
}

module.exports = new App().app;

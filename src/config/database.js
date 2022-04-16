require("dotenv").config();

module.exports = {
  dialect: "postgres",
  host: process.env.HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.POSTGRES_DB,
};

import dotenv from 'dotenv';
dotenv.config();

const configData = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  },
};

export default configData;
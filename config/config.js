const env = process.env.NODE_ENV || "development";
export default {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

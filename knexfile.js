require('dotenv').config();

module.exports = {
  development: {
      client: process.env.DB_TYPE,
      connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        charset: 'utf8',
      },
      migrations: {
        directory: `${process.cwd()}/database/migrations`,
      },
      seeds: {
          directory: `${process.cwd()}/database/seeds`,
      },
    },


  production: {
      client: process.env.DB_TYPE,
      connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
      }
    },

}
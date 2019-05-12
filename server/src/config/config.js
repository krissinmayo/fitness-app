// configuration file
const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'fitness-app',
    user: process.env.DB_USER || 'fitness-app',
    password: process.env.DB_PASS || 'fitness-app',
    options: {
      // type of database connecting to
      dialect: process.env.DIALECT || 'sqlite',
      // location of database connecting to
      host: process.env.HOST || 'localhost',
      // location to store files
      storage: path.resolve(__dirname, '../../fitness-app.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
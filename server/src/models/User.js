const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  // use salt for added security
  const SALT_FACTOR = 8
  console.log('hashPassword')

  // if password hasn't changed, do nothing
  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

// create new sequelize model for users
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      // don't allow duplicate email addresses
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  // validate user entered password
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  User.associate = function (models) {
  }

  return User
}
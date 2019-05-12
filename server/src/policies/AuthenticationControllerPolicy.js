const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    // validate user input with Joi
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        // any lower or upper case alphanumeric between 8-32 chars
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    // display error message to user for invalid input
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password guidelines:
              <br>
              1. May contain only lower case, upper case, or numerics
              <br>
              2. Must be between 8 and 32 characters in length
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
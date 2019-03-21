const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseController = require('./controllers/ExerciseController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
  
  app.get('/browse',
    ExerciseController.index)
  
  app.post('/browse',
    ExerciseController.post)
}

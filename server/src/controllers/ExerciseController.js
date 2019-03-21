const {Exercise} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        const exercises = await Exercise.findAll({
            limit: 10
        })
        res.send(exercises)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching exercises'
      })
    }
  },
  async post (req, res) {
    try {
        const exercise = await Exercise.create(req.body)
        res.send(exercise)
    } catch (err) {
        res.status(500).send({
        error: 'An error has occured while creating exercise'
      })
    }
  }
}
const {Exercise} = require('../models')

module.exports = {
  // method to get all exercises
  async index (req, res) {
    try {
        let exercises = null
        const search = req.query.search
        if (search) {
          exercises = await Exercise.findAll({
            where: {
              $or: [
                'title', 'muscleGroup', 'goalGroup'
              ].map(key => ({
                [key]: {
                  $like: `%${search}%`
                }
              }))
            }
          })
        } else {
          exercises = await Exercise.findAll({
            limit: 10
        })
      }
      res.send(exercises)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching exercises'
      })
    }
  },
  // method to display an exercise
  async show (req, res) {
    try {
      const exercise = await Exercise.findById(req.params.exerciseId)
      res.send(exercise)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured'
      })
    }
  },
  // method to create new exercise
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
const {News} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        const newsUpdates = await News.findAll({
            limit: 10
        })
        res.send(newsUpdates)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching news stories'
      })
    }
  },
  async post (req, res) {
    try {
        const newsUpdate = await News.create(req.body)
        res.send(newsUpdate)
    } catch (err) {
        res.status(500).send({
        error: 'An error has occured while creating news story'
      })
    }
  }
}
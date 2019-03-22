module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
      title: DataTypes.STRING,
      date: DataTypes.STRING,
      author: DataTypes.STRING,
      topic: DataTypes.STRING,
      storyURL: DataTypes.STRING
      //youtubeID: DataTypes.STRING
    })
    return News
  }
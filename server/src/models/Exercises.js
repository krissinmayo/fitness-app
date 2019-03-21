module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    title: DataTypes.STRING,
    muscleGroup: DataTypes.STRING,
    goalGroup: DataTypes.STRING,
    difficulty: DataTypes.STRING
    //imageURL: DataTypes.STRING,
    //youtubeID: DataTypes.STRING
  })
  return Exercise
}
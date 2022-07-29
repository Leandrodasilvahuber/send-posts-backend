const { DataTypes } = require('sequelize')

const postModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.STRING
  },
  user_id: {
    type: DataTypes.INTEGER
  }
}

export default postModel

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todos extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    todo_item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'todo',
  }
);

module.exports = Todos;



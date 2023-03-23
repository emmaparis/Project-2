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
    is_checked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        },
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



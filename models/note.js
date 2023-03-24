const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    note_item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_checked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    todo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "todo",
            key: "id",
        },
    },
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'note',
  }
);

module.exports = Note;



const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todos extends Model {
  getDays() {
    let validDays = [];
    if (this.sunday) {
      validDays.push(0);
    }
    if (this.monday) {
      validDays.push(1);
    }
    if (this.tuesday) {
      validDays.push(2);
    }
    if (this.wednesday) {
      validDays.push(3);
    }
    if (this.thursday) {
      validDays.push(4);
    }
    if (this.friday) {
      validDays.push(5);
    }
    if (this.saturday) {
      validDays.push(6);
    }
    return validDays;
  }
}

Todos.init(
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
    sunday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    monday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    friday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    saturday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isRecurring: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'todo',
  }
);

module.exports = Todos;



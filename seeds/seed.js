const sequelize = require('../config/connection');
const { User, Todos, Note } = require('../models');

const userData = require('./userData.json');

const todosData = require('./todosData.json');

const noteData = require('./noteData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Todos.bulkCreate(todosData, {
    individualHooks: true,
    returning: true,
  });
  await Note.bulkCreate(noteData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

  
};

seedDatabase();
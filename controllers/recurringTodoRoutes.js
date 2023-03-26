const router = require('express').Router();
const { Todo } = require('../../models');

// Fetch recurring to-do items
router.get('/recurring', async (req, res) => {
    try {
      const recurringTodos = await Todo.findAll({
        where: {
          user_id: req.session.user_id,
          recurring: true,
        },
        attributes: ['id', 'description', 'due_date', 'expansion', 'day'],
        order: [['due_date', 'ASC']],
      });
  
      res.status(200).json(recurringTodos);
    } catch (err) {
      res.status(500).json(err);
    }
  });
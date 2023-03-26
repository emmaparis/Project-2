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

  // Edit a recurring to-do item
router.put('/:id', async (req, res) => {
    try {
      const updatedTodo = await Todo.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      res.status(200).json(updatedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Delete a recurring to-do item
router.delete('/:id', async (req, res) => {
    try {
      const deletedTodo = await Todo.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      res.status(200).json(deletedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  });
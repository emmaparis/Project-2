const router = require('express').Router();
const { todo } = require('../models');

// Fetch recurring to-do items
router.get('/api/todos/recurring', async (req, res) => {
    try {
      const recurringTodos = await todo.findAll({
        where: {
            isRecurring: true,
        },
      });
  
      res.status(200).json(recurringTodos);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Edit a recurring to-do item
router.put('/api/todos/recurring', async (req, res) => {
    try {
      const updatedTodo = await todo.update(req.body, {
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
router.delete('/api/todos/recurring', async (req, res) => {
    try {
      const deletedTodo = await todo.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      res.status(200).json(deletedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
module.exports = router;
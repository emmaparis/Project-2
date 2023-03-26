// routes/api/todoRoutes.js
const router = require('express').Router();
const { todo } = require('../models');

// Create a new todo item
router.post('/', async (req, res) => {
  try {
    const newTodo = await todo.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a todo item
router.delete('/:id', async (req, res) => {
  try {
    const todoData = await todo.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!todoData) {
      res.status(404).json({ message: 'No todo item found with this id!' });
      return;
    }

    res.status(200).json(todoData);
} catch (err) {
    res.status(500).json(err);
    }
    });
    
    module.exports = router;

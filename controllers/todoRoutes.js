// routes/api/todoRoutes.js
const router = require('express').Router();
const { Todos } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new todo item
router.post('/', withAuth, async (req, res) => {
  try {
    const newTodo = await Todos.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a todo item
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const todoData = await Todos.destroy({
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

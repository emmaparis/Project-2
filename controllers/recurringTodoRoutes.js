const router = require('express').Router();
const { Todos } = require('../models');

// Fetch recurring to-do items
router.get('/', async (req, res) => {
    console.log("Get Route");
    try {
      const recurringTodos = await Todos.findAll({
        where: {
            isRecurring: true,
        },
      });
  
      res.status(200).json(recurringTodos);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
console.log("Get Route");
try {
    const selectedTodo = await Todos.findAll({
    where: {
        isRecurring: true,
        id: req.params.id,
    },
    });

    res.status(200).json(selectedTodo);
} catch (err) {
    res.status(500).json(err);
}
});

  // Edit a recurring to-do item
router.put('/:id', async (req, res) => {
    try {
      const updatedTodo = await Todos.update(req.body, {
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
router.delete('/delete/:id', async (req, res) => {
    try {
      const deletedTodo = await Todos.destroy({
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
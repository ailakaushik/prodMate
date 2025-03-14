const express = require('express');
const Task = require('../models/Task.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try
    {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error){
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error' });
    }
    
    
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
});

module.exports = router;

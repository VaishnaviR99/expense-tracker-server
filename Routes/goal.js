const express = require('express');
const Goal = require('../Models/Goal.js');

const router = express.Router();

router.post('/', async (req, res) => {
    const { user, description, amount } = req.body;
    try {
        const goal = new Goal({ user, description, amount });
        await goal.save();
        res.status(201).send(goal);
    } catch (error) {
        res.status(400).send({ error: 'Goal creation failed' });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const goals = await Goal.find({ user: userId });
        res.send(goals);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch goals' });
    }
});

module.exports = router;

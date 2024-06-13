const express = require('express');
const Transaction = require('../Models/Transaction');

const router = express.Router();

router.post('/', async (req, res) => {
    const { user, type, amount, category } = req.body;
    try {
        const transaction = new Transaction({ user, type, amount, category });
        await transaction.save();
        res.status(201).send(transaction);
    } catch (error) {
        res.status(400).send({ error: 'Transaction creation failed' });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const transactions = await Transaction.find({ user: userId });
        res.send(transactions);
    } catch (error) {
        res.status(400).send({ error: 'Failed to fetch transactions' });
    }
});

module.exports = router;

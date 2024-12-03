const express = require('express');
const Quote = require('../models/Quote');

const router = express.Router();

router.get('/', async (req, res) => {
    const quotes = await Quote.find();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

module.exports = router;

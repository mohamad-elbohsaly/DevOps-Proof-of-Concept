// app/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'DevOps PoC running 🚀' });
});

module.exports = app;
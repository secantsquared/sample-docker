const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./data/dbConfig');

server.use(cors());

server.get('/', async (req, res) => {
  try {
    const response = db('todos');
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: 'Error!' });
  }
});
server.post('/', async (req, res) => {
  const body = req.body;
  try {
    const response = await db('todos').insert(body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: 'Error!' });
  }
});

server.listen(9000, () => {
  console.log('ALIVE!');
});

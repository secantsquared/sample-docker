const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./data/dbConfig');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  db('todos').then(response => {
    return res.status(200).send(response);
  });
});
server.post('/', (req, res) => {
  const body = req.body;
  db('todos')
    .insert(body)
    .then(response => res.status(201).send(response));
});

server.listen(9000, () => {
  console.log('ALIVE!');
});

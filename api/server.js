const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.get('/', (req, res) => {
  res.send('HOLY SHITTLES IT WORKS!!!');
});

server.get('/user', (req, res) => {
  res.send('OmFrigginTitTiepOps this works');
});

server.listen(9000, () => {
  console.log('ALIVE!');
});

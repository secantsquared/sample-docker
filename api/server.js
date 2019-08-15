const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.get('/', (req, res) => {
  res.send('WOW IT WORKS');
});

server.listen(9000, () => {
  console.log('ALIVE!');
});

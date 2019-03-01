const express = require('express');

const apiRoutes = require('./api/apiRoutes.js');

const server = express();

server.get('/', (req,res) => res.send('API up and running'));

server.use('/api', apiRoutes);

const PORT = 9000;

server.listen(PORT, () => console.log(`Server running on port:${PORT}`))
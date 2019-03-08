require('dotenv').config();

const express = require('express');

const apiRoutes = require('./api/apiRoutes.js');

const server = express();

server.use(express.json());

server.get('/', (req,res) => res.send('API up and running'));

server.use('/api', apiRoutes);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`Server running on port:${PORT}`))
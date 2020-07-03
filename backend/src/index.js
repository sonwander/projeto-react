const express = require('express');
const server = express();
server.use(express.json());
const cors = require('cors');
server.use(cors());


const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(3000, () => {
  console.log('API ONLINE');
});
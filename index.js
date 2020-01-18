const express = require('express');
const postsRouter = require('./posts/postsRouter.js');
const server = express();

server.use('/api/posts', postsRouter);

server.listen(3000, () => console.log('Server on port 3000'));

'use strict';

const express = require('express');
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
const cors = require('cors');

const mongoose = require('mongoose');
const storageStoreRouter = require('./routes/myStoreStorage');
const storageToDoRouter = require('./routes/myToDoStorge');
const storageBookAppRouter = require('./routes/storageBookAppRouter');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => console.log('you connect to the DB')).catch(err => console.log(err));
console.log('hi');
app.use(cors());
app.use(express.json());

app.use('/store', storageStoreRouter);
app.use('/todo', storageToDoRouter);
app.use('/bookApp', storageBookAppRouter);

app.use('*', (req, res, error, next) => {
  res.status(404).json({
    error: 404,
    'this route dose not found': req.url,
  });
});

app.use((error, request, response, next) => {
  response.status(500).json({
    error: error,
    message: `sth wrong happened ${error.message}`,
    path: request.path,
  });
});



let start = (PORT) => {
  app.listen(PORT, () => {
    console.log(`I AM ON THIS ${PORT}`);
  });
};
module.exports = {
  app: app,
  start: start,
};

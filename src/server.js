'use strict';

const express = require('express');
const app = express();
const MONGODB_URI =process.env.MONGODB_URI || 'mongodb+srv://musab:omar@mystorge.9eycc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const mongoose = require('mongoose')
const storageRouter=require('./routes/myStorage')
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => console.log('you connect to the DB')).catch(err => console.log(err))


app.use(express.json());

app.use(storageRouter);

app.use('*', (req, res, error, next) => {
    res.status(404).json({
        error: 404,
        'this route dose not found': req.url,
    })
})

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

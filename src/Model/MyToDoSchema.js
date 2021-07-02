'use strict';

const mongoose = require('mongoose');


const MySchema = mongoose.Schema({
  text: { type: String, required: true },
});

const MySchemaModel = mongoose.model('myToDo', MySchema);
module.exports = MySchemaModel;



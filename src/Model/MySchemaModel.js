'use strict';

const mongoose = require('mongoose');


const MySchema = mongoose.Schema({
  association: { type: String, required: true },
  name: { type: String, required: true },
  PRICE: { type: Number ,required: true },
  description: { type: String, required: true },
  count: { type: Number ,required: true },
  imgUrl: { type: String, required: true },
});

const MySchemaModle = mongoose.model('myStore', MySchema);
module.exports = MySchemaModle;



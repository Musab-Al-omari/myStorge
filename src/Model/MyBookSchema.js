
const mongoose = require('mongoose');


const MySchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  publisher: { type: String },
  publishedDate: { type: String },
  description: { type: String },
  averageRating: { type: Number },
  ratingsCount: { type: Number },
  imgUrl: { type: String },
  previewLink: { type: String },
  buyLink: { type: String },
});

const MySchemaModle = mongoose.model('BookApp', MySchema);
module.exports = MySchemaModle;



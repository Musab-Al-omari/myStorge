
const mongoose = require('mongoose');


const MySchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  publisher: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  description: { type: String, required: true },
  averageRating: { type: Number, required: true },
  ratingsCount: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  previewLink: { type: String, required: true },
  buyLink: { type: String, required: true },
});

const MySchemaModle = mongoose.model('BookApp', MySchema);
module.exports = MySchemaModle;



const express = require('express');
const router = express.Router();

const MyModel = require('../Model/dataClass');

const MyBookSchema = require('../Model/MyBookSchema');



let MyBookAppInstance = new MyModel(MyBookSchema);


router.get('/', getAllBookApp);
router.get('/:id', getOneItem);
router.post('/', createBookApp);
router.put('/:id', updateItem);
router.delete('/:id', deleteBookApp);


async function getAllBookApp(request, response) {
  let allDataBace = await MyBookAppInstance.get();
  response.json(allDataBace);
}

async function getOneItem(request, response) {
  let id = parseInt(request.params.id);
  let oneItem = await MyBookAppInstance.get(id);
  response.json(oneItem);

}
async function updateItem(request, response) {
  let id = request.params.id;
  let theFrontBody = request.body;
  let updateItem = await MyBookAppInstance.update(id, theFrontBody);
  response.status(201).json(updateItem);
}
async function createBookApp(request, response) {
  let theFrontBody = request.body;
  let createItem = await MyBookAppInstance.create(theFrontBody);
  response.status(201).json(createItem);

}
async function deleteBookApp(request, response) {
  let id = request.params.id;
  await MyBookAppInstance.delete(id);
  response.status(200).send('item deleted');

}


module.exports = router;
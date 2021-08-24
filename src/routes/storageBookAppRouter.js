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
  try {
    let allDataBace = await MyBookAppInstance.get();
    response.json(allDataBace);
  } catch (error) {
    response.status(500).json({ error: error });

  }
}

async function getOneItem(request, response) {
  try {
    let id = parseInt(request.params.id);
    let oneItem = await MyBookAppInstance.get(id);
    response.json(oneItem);
  } catch (error) {
    response.status(500).json({ error: error });

  }

}
async function updateItem(request, response) {
  try {
    let id = request.params.id;
    let theFrontBody = request.body;
    let updateItem = await MyBookAppInstance.update(id, theFrontBody);
    response.status(201).json(updateItem);
  } catch (error) {
    response.status(500).json({ error: error });
  }
}


async function createBookApp(request, response) {
  try {
    let theFrontBody = request.body;
    let createItem = await MyBookAppInstance.create(theFrontBody);
    response.status(201).json(createItem);

  } catch (error) {
    response.status(500).json({ error: error });

  }

}


async function deleteBookApp(request, response) {
  try {
    let id = request.params.id;
    await MyBookAppInstance.delete(id);
    response.status(200).send('item deleted');
  } catch (error) {
    response.status(500).json({ error: error });

  }
}


module.exports = router;
const express = require('express');
const router = express.Router();

const MyModel=require('../Model/dataClass');

const MyToDoSchema=require('../Model/MyToDoSchema');



let MyToDoInstance=new MyModel(MyToDoSchema);


router.get('/', getAllToDo);
router.post('/', createToDo);
router.delete('/:id', deleteToDo);


async function getAllToDo(request,response) {
  let allDataBace= await MyToDoInstance.get();
  console.log('hi',allDataBace);
  response.json(allDataBace);
}
async function createToDo(request,response) {
  let theFrontBody=request.body;
  let createItem=await MyToDoInstance.create(theFrontBody);
  response.status(201).json(createItem);
    
}
async function deleteToDo(request,response) {
  let id = parseInt(request.params.id);
  await MyToDoInstance.delete(id);
  response.status(200).send('item deleted');
    
}

  
module.exports = router;
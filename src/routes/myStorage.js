const express = require('express');
const router = express.Router();
const MyModel=require('../Model/dataClass')
const MySchemaModel=require('../Model/MySchemaModel')

MySchemaInstance=new MyModel(MySchemaModel)


router.get('/', getAllDataBace);
router.get('/:id', getOneItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);




async function getAllDataBace(request,response) {
    console.log('hi');
    let allDataBace= await MySchemaInstance.get()
    console.log(allDataBace);
    response.json(allDataBace)
}

async function getOneItem(request,response) {
    let id=parseInt(request.params.id)
    let oneItem= await MySchemaInstance.get(id)
    response.json(oneItem)
    
}
async function createItem(request,response) {

    let theFrontBody=request.body
    console.log(theFrontBody);
    let createItem=await MySchemaInstance.create(theFrontBody)
    console.log(createItem);
    response.status(201).json(createItem);
}


async function updateItem(request,response) {
    let id=parseInt(request.params.id)
    let theFrontBody=request.body
    let updateItem=await MySchemaInstance.update(id,theFrontBody)
    response.status(201).json(updateItem);
}

async function deleteItem(request, response) {
    let id = parseInt(request.params.id);
    await MySchemaInstance.delete(id);
    response.status(200).send('item deleted');
  }

  
module.exports = router;
'use strict';


class MyModel{
    constructor(schema){
        this.schema=schema;
    }




    get(_id){
        if (_id) {
            return this.schema.findById(_id) 
        }else{
            return this.schema.find({}) 
        }
    }
    
  getBy(obj) {
    return this.schema.find(obj);
  }

  create(obj) {
    let newRecord = new this.schema(obj);
    return newRecord.save();
  }

  update(_id, obj) {
    return this.schema.findByIdAndUpdate(_id, obj, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }


}
module.exports=MyModel
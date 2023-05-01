const mongoose=require('mongoose');

const ToDoSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})
//mongoose.Schema takes datatypes with its properties.

module.exports=mongoose.model('ToDoM',ToDoSchema);
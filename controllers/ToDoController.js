

const ToDomodel=require('../models/ToDoModel')

module.exports.getToDo=async (req,res)=>{
    const toDo=await ToDomodel.find()
    res.send(toDo)
}

module.exports.addToDo = async (req,res)=>{
    const  text= req.body
    console.log(text);
    //destucturing the contents in req innto text.
    //now save in to model.
    ToDomodel.create(text)
        .then(
            (data)=> {
                console.log("Added succesfully...");
                console.log(data);
                res.send(data)
            }
        )
}

module.exports.updateToDo=async (req,res)=>{
    const { _id,text }=req.body
    ToDomodel.findByIdAndUpdate(_id,{text})
        .then(()=>res.send("updated succesfully..."))
        .catch((err)=>console.log(err))
}

module.exports.deleteToDo=async (req,res)=>{
    const {_id}=req.body
    ToDomodel.findByIdAndDelete(_id)
        .then(()=>res.send("deleted succs..."))
        .catch((err)=>console.log(err))
}

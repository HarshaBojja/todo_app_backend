const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config()

const routes=require('./routes/ToDoRoute.js')

const app=express();
app.use(bodyParser.json({ limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}))


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(routes)
app.use(cors)

const PORT=process.env.PORT||5000
//const CNN="mongodb+srv://sai:12345@cluster0.8mgcboz.mongodb.net/?retryWrites=true&w=majority"
//{useNewUrlParser:true,useUnifiedTopology:true,}
/*
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected to database/cluster...`))
.catch((err)=>console.log("This is mongoose error"))*/

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));





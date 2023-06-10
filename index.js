const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const content=require("./schema")
const Content = require("./schema")

console.log(Content)
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb+srv://sunitha:sunitha@cluster0.suj4brm.mongodb.net/firstdb?retryWrites=true&w=majority")
 .then(()=>{
    console.log("mongodb connected successfully")
 })
 .catch((err)=>{
   console.log(err)
 })
 app.post("/add",(req,res)=>{
    console.log("data from front end",req.body)
    const {name,passcode}=req.body
   const newData=new Content({
    name,passcode
   })
   newData.save()
   res.send("added")
})
app.get("/retrieve",(req,res)=>{
    Content.find()
    .then(found=>res.json(found))
})
app.get("/",(req,res)=>{
    res.send("server started successfully")
})
app.post("/add",(req,res)=>{
    
})
app.get("/products",(req,res)=>{
    res.json(products)
})
app.get("/name",(req,res)=>{
    res.send("codegnan")
})
app.listen(4000,()=>
console.log("sever is started")
)
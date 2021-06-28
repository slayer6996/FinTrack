const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/financeTrackerDB",{useNewUrlParser:true,useUnifiedTopology:true})
const app=express()

const userSchema=new mongoose.Schema({
    email:String,
    budget:[Number],
    expenditure:[Number]
})
//[bills,food,transport,entertainment,others]

const User=new mongoose.model("User", userSchema)

app.route("/")
.post(function(req,res){
    const email=req.body.email
    User.find({})
})
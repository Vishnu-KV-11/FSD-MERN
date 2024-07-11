//importing express
var express=require("express")
//initialization
var app=express()
require('./connection')
//api

//



//port
app.listen(5002,(req,res)=>{
  console.log("port is up and running")
})
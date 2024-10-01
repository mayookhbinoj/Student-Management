import express from "express";
import mongoose from "mongoose";
import  dotenv from "dotenv"
import studentrouter from "../src/router/router"
import connect  from "../src/config/db"
import path from "path";
import bodyParser  = require("body-parser");
dotenv.config()
const app=express()
connect()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/",studentrouter)
app.listen(4001,():void=>{
    console.log(`server is runing on 4001`)
})

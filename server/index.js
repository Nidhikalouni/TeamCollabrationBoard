import express from 'express'
import userRoute from './routes/route.js';
// const express = require('express');
// import { JsonWebTokenError } from 'jsonwebtoken';

import mongoose from 'mongoose';
import cors from 'cors'
// const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;





//  Database Connextion with MongoDB

mongoose.connect("mongodb+srv://nidhikalouni:Nidhi@321@cluster0.fx8wsoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/TeamCollabrationBoard")

// mongoose.connect("mongodb+srv://nidhikalouni:Nidhi@321@cluster0.fx8wsoj.mongodb.net/TeamCollabrationBoard")


// API Creation

app.get('/',userRoute)



//Creating Endpoint for different

app.get('/boards',(req,res)=>{
    res.send("This will show board list");
})

app.post('/boards',(req,res)=>{
        res.json({
            success:1,
            message:"Data posted on server"
        })
})

app.get('/boards/:id/tasks',(req,res)=>{
    const id = req.params.id;
    res.send(`get task in board of specific id :${id}`)
})

app.post('/boards/:id/tasks',(req,res)=>{
    const id = req.params.id;
     res.json({
            success:1,
            message:`Task Posted with id : ${id}`
        })
    
})


app.put('/tasks/:id',(req,res)=>{
    res.send('update task')
})

app.delete('/tasks/:id',(req,res)=>{
    res.send('task deleted successfully')
})




// Schema for Creating Board
 const board = mongoose.model("Board",{
    id:{
        type: Number,
        required :true,
    },
    title:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        required: true,
    },
     status:{
        type : String,
        required: true,
    },
    assignedTo:{
        type:String,
        required:true,
    },
     
     dueDate:{
        type : Date,
        default: Date.now(),
    },
    belongsToBoard:{
        type:Boolean,
        default:true,
    },
 })

 

 //Creating API for deleting board

 app.post('/removeboard',async(req,res)=>{
    await board.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
 })
 
 //Creating API for getting all boards
 app.get('/allboard',async(req,res)=>{
      let boards = await board.find({});
      console.log("All Boards Fetched");
      res.send(boards);

 })

//  Schema creating for User model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})



app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server Running on Port "+PORT)
    }else{
        console.log("Error : "+error)
    }
})

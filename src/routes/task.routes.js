import { Router } from "express";

const taskrouter= Router();

taskrouter.get('/task',(req,res)=>{
    res.send("tarea feliz");
})

taskrouter.get('/task/:id',(req,res)=>{
    
    res.send("tristes ps");
})

export default taskrouter;
import Tarea from "../models/Task";

export const getIndex= async (req,res)=>{  
    const tareass = await Tarea.find();
    res.json(tareass);
}

export const getIndexOne= async (req,res)=>{  
    try {
        const idx = req.params.id; 
        const tareaid = await Tarea.findById(idx);
        res.json(tareaid );
        
    } catch (error) {
        console.log(error);
    }
}

export const postIndex= async (req,res)=>{
    const newtask = Tarea({title:req.body.title, 
        description:req.body.description,
        done: req.body.done ? req.body.done : false});
    await newtask.save();
    res.send("recibido");
}

export const deleteIndexOne= async (req,res)=>{  

    await Tarea.findByIdAndDelete(req.params.id);
    res.send("eliminado");
}
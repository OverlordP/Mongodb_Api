import { Schema, model, version } from "mongoose";

const tareap = new Schema( {
    title:{
        type: String,
        require: true,
        trim: true
    } ,
    description:{
        type:String,
        require:true
    },
    done:{
        type: Boolean,
        default: false
    } 
},
   { versionKey:false,
    timestamps: true}
);

export default model('Tarea',tareap);


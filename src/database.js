import mongoose from "mongoose";
import config from "./config";

(async ()=>{
    const conn = await mongoose.connect(config.mongodbURL);
    console.log("conectado a db ", conn.connection.name);
})();



import app from "./app";

import "./database"

app.listen(app.get('Port'),()=>{
    console.log("server on port :",app.get('Port'));
})
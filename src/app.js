import express from "express";
import morgan from "morgan";
import router from "./routes/index.routes";
import taskrouter from "./routes/task.routes";
import cors from "cors";


const app = express();

app.set('Port',process.env.PORT ||3000)

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//rutas
app.use(express.urlencoded({extended: false}));

app.use('/api/',router);
app.use('/',taskrouter);

export default app;
import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import {fileURLToPath} from 'url';

import librosRouter from "../routes/routes.js";
import swaggerDocument from "../swagger/version(1.0).json" assert {type: "json"};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Server{

    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.configCors = {
            methods : ["GET", "POST", "PUT", "PATCH", "DELETE"]
        }

        this.middlewares();

        this.rutas = {
            api : '/api'
        }

        this.routes();
    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.port}`);
        })
    }

    middlewares(){
        this.app.use(cors(this.configCors));
        this.app.use(express.json());
        this.app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    }

    routes(){
        this.app.use(this.rutas.api, librosRouter);
    }
}

export default Server;
import express from 'express';
import indexRoutes from './routes/index';
import { Sequelize } from "sequelize";
import sequelize from "./config/database.config"

sequelize.sync().then(()=>{
    console.log("conectado no db")
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes)

app.listen(4000, () => console.log("Serverver is running"));

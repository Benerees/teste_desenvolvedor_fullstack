import express from 'express';
import indexRoutes from './routes/index';
import sequelize from "./config/database.config"
import { UserController } from './controllers/User.controller';

sequelize.sync().then(() => {
    new UserController().createUsuario();
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes)

app.listen(4000, () => console.log("Serverver is running"));

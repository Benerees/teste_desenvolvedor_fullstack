import {Sequelize} from "sequelize";

const sequelize = new Sequelize("GEO", "teste", "teste",{
    host: "localhost",
    dialect: 'postgres'
})

export default sequelize;
import {Sequelize} from "sequelize";

const sequelize = new Sequelize("GEO", "teste", "teste",{
    host: '172.17.0.1',
    dialect: 'postgres'
})

export default sequelize;
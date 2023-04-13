import sequelize from "../config/database.config";
import { DataTypes, Model } from "sequelize";

interface coordenadasAttributes{
    id: string;
    title: string;
}

export class coordenadasInstance extends Model<coordenadasAttributes>{}

coordenadasInstance.init(
    {
        id: 
        {
            type: DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        title:  
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        tableName: "coordenadas"
    }
);
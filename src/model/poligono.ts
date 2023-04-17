import sequelize from "../config/database.config";
import { ARRAY, DataTypes, Model } from "sequelize";

interface PoligonoAttributes {
    id: string;
    longitude: string;
    latitude: string;
}

export const Poligono = sequelize.define('poligono', {
    id:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    longitude:
    {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    latitude:
    {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
});

export class PoligonoInstance extends Model<PoligonoAttributes>{ }

PoligonoInstance.init(
    {
        id:
        {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        longitude:
        {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        latitude:
        {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        tableName: "poligono"
    }
);
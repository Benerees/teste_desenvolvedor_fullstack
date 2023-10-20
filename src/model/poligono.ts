import { GeometryType } from "types/geometryType";
import sequelize from "../config/database.config";
import { DataTypes, Model } from "sequelize";

interface PoligonoAttributes {
    id: string;
    geometry: GeometryType;
}

export const Poligono = sequelize.define<Model<PoligonoAttributes>>('poligono', {
    id:
    {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    geometry:
    {
        type: DataTypes.GEOMETRY,
        allowNull: false,
    }
},
    {
        freezeTableName: true,
        tableName: "poligono",
    }
);

export class PoligonoInstance extends Model<PoligonoAttributes>{ }

PoligonoInstance.init(
    {
        id:
        {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        geometry:
        {
            type: DataTypes.GEOMETRY,
            allowNull: false,
        }

    },
    {
        freezeTableName: true,
        sequelize: sequelize,
        tableName: "poligono",
    }
);
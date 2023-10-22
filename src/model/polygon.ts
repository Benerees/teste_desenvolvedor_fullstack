import { GeometryType } from "types/geometryType";
import sequelize from "../config/database.config";
import { DataTypes, Model } from "sequelize";
import { PolygonType } from "types/polygonType";


export const Polygon = sequelize.define<Model<PolygonType>>('polygon', {
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
        tableName: "polygon",
    }
);

export class PolygonInstance extends Model<PolygonType>{ }

PolygonInstance.init(
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
        tableName: "polygon",
    }
);
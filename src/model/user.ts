
import { DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config";

interface userAttributes {
    id: string;
    name: string;
    password: string;
    email: string;
}

export const User = sequelize.define('usuarios', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
});




export class userInstance extends Model<userAttributes>{ }

userInstance.init(
    {
        id:
        {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize: sequelize,
        tableName: "usuarios"
    }
);


import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.config";
import { UserType } from "types/userType";


export const User = sequelize.define<Model<UserType>>('user', {
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
    }
},
{
    freezeTableName: true,
    tableName: "user"
}
);


export class userInstance extends Model<UserType>{ }

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
        freezeTableName: true,
        sequelize: sequelize,
        tableName: "user",
        
    }
);

const { Model, DataTypes } = require('sequilize');
const bcrypt = require('bcrypt');

// create our User model
class user extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

user.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            //this should validate that the password has 8 letters
            validate: {
                len: [8]
            }
        }

    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

model.exports = user
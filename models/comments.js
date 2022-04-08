const { Model, DataTypes} = require('sequilize');
//connections file

class comment extends Models { }

comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

model.exports = comment;
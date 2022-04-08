const { Model, DataTypes } = require('sequilize');

class post extends Model { }

post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        post_text: {
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
        }
    },
    {
        sequilize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

model.exports = post
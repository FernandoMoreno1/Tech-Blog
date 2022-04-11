const { User } = require('../models');

const userData = [{
        username: 'tom',
        password: 'password123'

    },
    {
        username: 'bob',
        password: 'password123'
    },
    {
        username: 'jose',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
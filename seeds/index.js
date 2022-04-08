//import all seeding files
const seedusers = require('./user-seeds');
const seedposts = require('./post-seeds');
const seedcomments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    //the force: true will delete the data everytime the server is restarted
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedusers();
    console.log('--------------');

    await seedposts();
    console.log('--------------');

    await seedcomments();
    console.log('--------------');

    process.exit(0);
};

seedAll();
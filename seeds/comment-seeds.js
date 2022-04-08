const { comment } = require('../models');

//this is what will be populating the comment sections
const commentdata = [
    {
        comment_text: 'i agree!' ,
        user_id: 3 ,
        post_id: 1,
    }, {
        comment_text: 'totally' ,
        user_id: 1,
        post_id: 2,
    }, {
        comment_text: 'i also think that',
        user_id:2 ,
        post_id: 2,
    }, {
        comment_text: 'thumbs up' ,
        user_id: 4,
        post_id: 3,
    }, {
        comment_text: 'definitely not of my linking' ,
        user_id: 2,
        post_id: 4,
    }, {
        comment_text: 'great' ,
        user_id: 1,
        post_id: 4,
    },
];

const seedcomments = () => comment.bulkCreate(commentdata);

module.exports = seedcomments;
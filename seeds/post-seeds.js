const { post } = require('../models');

const postdata = [
    {
        title: 'haha',
        post_text: 'Morbi non quam nec dui luctus rutrum.',
        user_id: '',
    },    {
        title: 'this is me',
        post_text: 'Nunc purus.',
        user_id: '',
    },    {
        title: 'wel...',
        post_text: 'In hac habitasse platea dictumst.',
        user_id: '',
    },    {
        title: 'work...',
        post_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        user_id: '',
    },
];
const seedposts = () => post.bulkCreate(postdata);

module.exports = seedposts;
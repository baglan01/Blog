const faker = require('faker');
const TurndownService = require('turndown');

const models = require('./models');

const owner = '5fb09d61bbd8bb49b29dbf12';

module.exports = () => {
    models.Post.remove()
        .then(() => {
            Array.from({ length: 20 }).forEach(() => {
                const turndownService = new TurndownService();

                models.Post.create({
                    title: faker.lorem.words(5),
                    body: turndownService.turndown(faker.lorem.words(100)),
                    owner
                })
                    .then(console.log)
                    .catch(console.log);
            });
        })
        .catch(console.log);
};
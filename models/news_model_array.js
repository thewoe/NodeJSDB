const { v4: uuidv4 } = require('uuid');

let news_posts = [{"_id": "123"}, {"_id": "456"}];

const getAllNews = () => {
    return news_posts;
};

const getOneNews = (_id) => {
    return news_posts.find((e) => e._id === _id);
};

const insertNews = (title, content) => {
    const data = {
        _id: uuidv4(),
        title: title,
        content: content,
        date: new Date()
    };
    news_posts.push(data);
    return data;
};

const updateNews = (_id, title, content) => {
    let data = {};
    news_posts = news_posts.map((e) => {
        if (e._id === _id) {
            data = {
                _id: e._id,
                title: title,
                content: content,
                date: e.date
            };
            return data;
        }
        else {
            return e;
        };
    });
    return data;
};

const deleteNews = (_id) => {
    news_posts = news_posts.filter((e) => e._id !== _id);
    return news_posts;
};

module.exports = {
    getAllNews,
    getOneNews,
    insertNews,
    updateNews,
    deleteNews
};
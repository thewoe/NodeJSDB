var express = require('express');
var router = express.Router();
const { getAllNews, getOneNews, insertNews, updateNews, deleteNews } = require('../models/news_model');

router.get('/', (req, res, next) => {
    const news = getAllNews();
    if (news.length === 0) {
        res.status(204).send({message: "No data found"});
    }
    else {
        res.status(200).send(news);
    }
});

router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    let news = getOneNews(_id);
    res.status(200).send(news);
});

router.post('/', (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const news = insertNews(title, content);
    res.status(200).send(news);
});

router.patch('/', (req, res, next) => {
    const {id, title, content} = req.body;
    const news = updateNews(id, title, content);
    res.status(200).send(news);
});

router.delete('/:id', (req, res, next) => {
    const _id = req.params.id;
    const news = deleteNews(_id);
    res.status(200).send(news);
});

module.exports = router;
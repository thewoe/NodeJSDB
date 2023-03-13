const { v4: uuidv4 } = require('uuid');

const News = require("../models/news_model");

exports.getAllNews = (req, res, next) => {
    News.findAll({attributes: ['_id', 'title', 'content', 'date']}).then((n) => {
        if (n.length === 0) {
            console.log(n)
            res.status(200).json({message: "No data found"});
        }
        else {
            res.status(200).json(n);
        };
    });
};

exports.getOneNews = (req, res, next) => {
    const _id = req.params.id;
    News.findOne({ where: { _id: _id }}).then((n) => {
        res.status(200).json(n);
    }).catch((err) => {
        console.log("Something went horribly wrong!");
    });
};

exports.insertNews = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const data = {
        _id: uuidv4(),
        title: title,
        content: content,
        date: new Date()
    };
    News.create(data).then((n) => {
        if (n) {
            res.status(200).json(n);
        }
        else {
            res.status(400).json({message: "Failed to insert"});
        };
    });
};

exports.updateNews = (req, res, next) => {
    const {id, title, content} = req.body;
    News.update({title, content}, { where: { _id: _id }}).then((n) => {
        res.status(200).json(n);
    });
};

exports.deleteNews = (req, res, next) => {
    const _id = req.params.id;
    News.destroy({ where: { _id: _id }}).then((n) => {
        res.status(200).json(n);
    });
};
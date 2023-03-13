var express = require('express');
var router = express.Router();

const NewsController = require("../controllers/news_controller");

router.get('/', NewsController.getAllNews);

router.get('/:id', NewsController.getOneNews);

router.post('/', NewsController.insertNews);

router.patch('/', NewsController.updateNews);

router.delete('/:id', NewsController.deleteNews);

module.exports = router;
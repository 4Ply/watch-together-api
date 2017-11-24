'use strict';

module.exports = function (app) {
    var animeController = require('../controllers/trackAnimeController');

    app.route('/:userID/track/anime')
        .get(animeController.listAnime);


    app.route('/:userID/track/anime/:animeID')
        .get(animeController.read_a_task)
        .put(animeController.trackAnime)
        .delete(animeController.deleteAnime);
};

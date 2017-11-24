'use strict';

var mongoose = require('mongoose'), Anime = mongoose.model('Anime');
var mal = require('maljs');

exports.listAnime = function (req, res) {
    Anime.find({
        userID: req.params.userID
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.trackAnime = function (req, res) {
    var animeID = req.params.animeID;
    var userID = req.params.userID;

    function saveAnime(result) {
        var anime = new Anime(
            {
                userID: userID,
                name: result.title,
                id: result.id,
                coverImageURL: result.cover,
                description: result.description
            }
        );

        anime.save(function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }

    if (animeID && userID) {
        console.log(animeID);
        mal.getById('anime', animeID).fetch().then(function (result) {
            console.log(result);
            saveAnime(result);
        }).catch(function (reason) {
            console.log("/search/:anime Promise error: " + reason);
            res.send(reason);
        });
    } else {
        res.send("Invalid animeID");
    }
};


exports.read_a_task = function (req, res) {
    Anime.findById(req.params.animeID, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.update_a_task = function (req, res) {
    Anime.findOneAndUpdate({
        _id: req.params.animeID
    }, req.body, {new: true}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.deleteAnime = function (req, res) {
    Anime.remove({
        userID: req.params.userID,
        id: req.params.animeID
    }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Anime successfully deleted'});
    });
};

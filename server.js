var express = require('express'),
    app = express(),
    port = process.env.WATCH_TOGETHER_API_PORT || 4100,
    mongoose = require('mongoose'),
    Task = require('./api/models/trackAnimeModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb/TrackAnime');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/trackAnimeRoutes');
routes(app);

app.listen(port);
console.log('API server started on: ' + port);

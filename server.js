const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json())

app.use(express.static)
const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    db = require('./models')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json())

app.use(express.static)




app.listen(process.env.PORT || 3000)
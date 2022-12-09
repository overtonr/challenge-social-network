const { connect, connection } = require('mongoose');
//needs process.env.MONGODB_URI if deploying to heroku

//Local connection to MongoDB
//name of DB: socialmediaDB

connect('mongodb://localhost/socialmediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Exports connection
module.exports = connection;
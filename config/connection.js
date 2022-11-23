const {connect, connection } = require('mongoose');
//needs process.env.MONGODB_URI if deploying to herokue

//Local connection to MongoDB
//name of DB: socialmediaDB
connect('mongodb://localhost:27017/socialmediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Exports connection
module.exports = connection;
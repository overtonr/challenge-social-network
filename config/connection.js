const {connect, connection } = require('mongoose');

//Local connection to MongoDB
//name of DB: socialmediaDB
connect('mongodb://localhost:27017/socialmediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Exports connection
module.exports = connection;
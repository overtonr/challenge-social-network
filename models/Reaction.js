//reactionID
//reactionBody
//username
//createdAt

const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
   reactionId: {},//mongoose objectID data type, default set to new objectId
   reactionBody:{}, // string, required, 280 max
   username:{}, //string, required
   createdAt: {} //date, set default to current, getter to format timestamp on query
});

//shouldnt be a model, but a sub doc in thought model

thoughtSchema
 .virtual('userReaction')
 .get(function(){
    
 })
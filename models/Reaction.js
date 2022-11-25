//reactionID
//reactionBody
//username
//createdAt

const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
   reactionId: {},//mongoose objectID data type, default set to new objectId
   reactionBody:{}, // string, required, 280 max
   username:{}, //string, required, trimmed
   createdAt: {} //date, set default to current, getter to format timestamp on query
});
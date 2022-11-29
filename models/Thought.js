//thoughtText
//createdAt
//username
//reactions

const { Schema, model } = require("mongoose");

const { Schema, model } = require("mongoose");
const userSchema = require('./User');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText:{
        //string, required, between 1 &280 characters
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,

    },
    createdAt:{
        //date, current time default, getter method to format on query
        type: Date,
        default: Date.now
    },
    username: {},
    //string, required
    //linked user that created thought
    reactions:[]//array of nested doc created with reactionSchema
    
});
//virtual: rectionCount, leng of reactions array
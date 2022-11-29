const { Schema, model } = require("mongoose");
const userSchema = require('./User');


//subdocument
const reactionSchema = new Schema({
    reactionId: {},//mongoose objectID data type, default set to new objectId
    reactionBody:{}, // string, required, 280 max
    username:{}, //string, required
    createdAt: {} //date, set default to current, getter to format timestamp on query
});

//parent document
const thoughtSchema = new Schema(
    {
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
        //getter to format on query
    },
    username: {
        //string, required
        type: String,
        required: true,
    },
    //linked user that created thought
    reactions:[reactionSchema]//array of nested doc created with reactionSchema
    },
    {
        toJSON: {virtuals: true},
        id: false,
    }
);


//virtual: rectionCount, length of reactions array
thoughtSchema
    .virtual('reactionCount')
    .get(function(){
        return this.reactions.length;
    });

//Initialize model
const Thought = model("Thought", thoughtSchema);
//Export model
model.exports = Thought;
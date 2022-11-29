const { Schema, Types, model} = require("mongoose");


//subdocument
const reactionSchema = new Schema(
    {
    reactionId: {
        //mongoose objectID data type, default set to new objectId
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),

    },
    reactionBody:{
        // string, required, 280 max
        type: String,
        required: true,
        maxLength: 280,
    },
    username:{
        //string, required
        type: String,
        required: true,
    },
    createdAt: {
        //date, set default to current, getter to format timestamp on query
        type: Date,
        default: Date.now,
        // get: , for formatting 
    },
    },
    {
        toJSON: {getters: true},
        id: false,
    }

);

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
        toJSON: {virtuals: true, getters: true},
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
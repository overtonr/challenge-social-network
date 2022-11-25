// username
// email
// thoughts
// friends

const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought');

const userSchema = new Schema({
    username:{
        //string, unique, required,trimmed

    },
    email:{
        //string, unique, required, must match valid email
    },
    thoughts: [thoughtSchema], //array of _id values ref thought model
    friends:[]//array of _id values ref user model (SELF REFERENCE)
    
});
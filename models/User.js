const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
    username:{
        //string,unique,required,trimmed
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        //string, unique, required, must match valid email
        type: String,
        unique: true,
        required: true,
        //probably needs regex to validate email
    },
    thoughts: [thoughtSchema], //array of _id values ref thought model
    friends:[]//array of _id values ref user model (SELF REFERENCE) 
    },
    {
        toJSON: {virtuals: true},
    }
);

//virtual called friendCount: retrieved length of friend array
userSchema
    .virtual('friendCount')
    .get(function(){
        return this.friends.length;
    });

//Intialize model
const User = model('user', userSchema);
//Export model
model.exports = User;
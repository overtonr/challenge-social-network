const {Thought, User} = require('../models');

const thoughtController = {
//GET all thoughts
    getThoughts(){},
//GET single thought by ID
    getSingleThought(){},
//POST a new thought : push to associated id to users thoughts arr
    createNewThought(){},
//PUT update thought by ID
    updateThought(){},
//DELETE remove thought by ID
    deleteThought(){},
}

//POST create reaction stored in single thought's reactions arr
//DELETE remove reaction by reactionID

module.exports = thoughtController;
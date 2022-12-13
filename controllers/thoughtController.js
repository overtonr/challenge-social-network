const {Thought, User} = require('../models');

const thoughtController = {
//GET all thoughts
    getThoughts(req,res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500),json(err));
    },
//GET single thought by ID
    getSingleThought(req,res){
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
        !thought
            ? res.status(400).json({message: 'Invalid thought ID'})
            : res.json(thought)
        )
        .catch((err) => res.status.json(err));
    },
//POST a new thought : push to associated id to users thoughts arr
    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
//PUT update thought by ID
    updateThought(req,res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'Invalid thought ID'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
//DELETE remove thought by ID
    deleteThought(req,res){
        Thought.findOneAndUpdate({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'Invalid thought ID'})
        : User.deleteMany({ _id: { $in: thought.users }})
        )
    .then(() => res.json({ message: 'Thought and users deleted'}))
    .catch((err) => res.status(500).json(err));
    },
//POST create reaction stored in single thought's reactions arr
    addReaction(req,res){
    },
//DELETE remove reaction by reactionID
    deleteReaction(req,res){}
};

module.exports = thoughtController;
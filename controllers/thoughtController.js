const { Thought, User } = require('../models');

const thoughtController = {
    //GET all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500), json(err));
    },

    //GET single thought by ID
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Invalid thought ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //POST a new thought : push to associated id to users thoughts arr
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Thought created, but invalid user ID',
                    })
                    : res.json('New thought created')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //PUT update thought by ID
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Invalid thought ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //DELETE remove thought by ID
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then((thoughtId) => {
                if (!thoughtId) {
                    return res.status(404).json({ message: "Invalid thought ID" });
                }
                return User.findOneAndUpdate(
                    { thoughts: params.id },
                    { $pull: { thoughts: params.id } },
                    { new: true }
                );
            })
            .then((user => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ message: "Invalid user ID" });
                }
                res.json({ message: "Thought successfully deleted!" });
            })
                .catch((err) => res.status(500).json(err)));
    },

    //POST create reaction stored in single thought's reactions arr
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Invalid thought ID' })
                    : res.json(video)
            )
            .catch((err) => res.status(500).json(err))
    },

    //DELETE remove reaction by reactionID
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Invalid thought ID' })
                    : res.json(video)
            )
            .catch((err) => res.status(500).json(err));
    },
};

module.exports = thoughtController;
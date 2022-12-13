const {Thought, User} = require('../models');

const userController = {
//GET all users
    getUsers(req, res){
        User.find()
        .then((users) => res.JSON(users))
        .catch((err) => res.status(500).JSON(err));
    },
//GET single user by ID
    getSingleUser(){
        User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Invalid user ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
//POST a new user
    createUser(){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
//PUT update user by ID
    updateUser(){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'Invalid user ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
//DELETE remove user by ID : cascade to remove all associated thoughts
    deleteUser({ params }, res){
        User.findOneAndDelete({ _id: params.id})
        .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: "Invalid user ID" });
            }
            // BONUS: get ids of user's `thoughts` and delete them all
            // $in to find specific things
            return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
          })
          .then(() => {
            res.json({ message: "User and linked thoughts deleted" });
          })
            .catch((err) => res.status(500).json(err));
    },
//POST add friend to user friend list
    addFriend(){},
//DELETE remove friend from users friend list
    deleteFriend(){},
}

module.exports = userController;
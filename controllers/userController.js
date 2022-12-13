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
    createUser(){},
//PUT update user by ID
    updateUser(){},
//DELETE remove user by ID : cascade to remove all associated thoughts
    deleteUser(){},
//POST add friend to user friend list
    addFriend(){},
//DELETE remove friend from users friend list
    deleteFriend(){},
}

module.exports = userController;
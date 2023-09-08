const User = require("../models/User");

const createUser = async (user) => {
  const newUser = new User(user);
  const savedUser = await newUser.save();
  return savedUser;
};

const getUser = (req, res) => {
  User.findOne({ name: req.body.name }).then(async(user) => {
    if (user) res.status(200).send({ user });
    else {
      try {
        const newUser = await createUser(req.body);
        res.status(200).send({ user: newUser });
      }
      catch(err) {
        res.send(501).send({ error:err });
      }
      
    }
  });
};

module.exports = { getUser };

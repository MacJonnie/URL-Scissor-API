import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/users.js";
import urlModel from '../model/url.js';

// User Registration...
const signUp = (req, res) => {
  const user = new User({
    email: req.body.email,
    userName: req.body.userName,
    password: bcrypt.hashSync(req.body.password, 8),
});

try {
     user.save().then(newUser => {
        res.status(200).send(
            { message: "User Created successfully" }
        );
        console.log("New user created")
        console.log(user)
     })
  } catch (error) {
    res.status(500).send({ message: error });
  }
  
};

// User login...
const signIn = (req, res) => {
    User.findOne({ email: req.body.email }).exec()
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User not found. Please Register" });
        }
  
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  
        if (!passwordIsValid) {
          return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
        }
  
        const token = jwt.sign({ userId: user._id }, process.env.API_SECRET, { expiresIn: "1h" });
  
        res.status(200).send({
          user: { userId: user._id, email: user.email, userName: user.userName },
          message: "Logged in successfully",
          accessToken: token,
        });

        console.log("You are now logged in")
        console.log(user.id)
        console.log(user.userName)
      })
      .catch(err => {
        console.error(err);
        res.status(500).send({ message: 'Error finding user' });
      });
};

// Get a User Url count...
const getUserUrlCount = async (req, res) => {
  
  try {
    const userId = User._id;
    const urlCount = await urlModel.countDocuments({ userId });
    res.json({ urlCount });
    console.log(`Your Url Count is ${urlCount}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {signUp, signIn, getUserUrlCount};
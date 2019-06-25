const express = require("express");
const Router = express.Router();
const User = require("../models/userModel");

Router.post("/register", (req, res) => {
  const user = new User(req.body);
  token = user.assignToken();
  user
    .save()
    .then(doc => {
      console.log("save in database");
      res.status(200).json({
        _id: doc._id,
        success: true,
        username: doc.username,
        email: doc.email,
        role: doc.role,
        token
      });
    })

    .catch(err =>
      res.json({
        success: false,
        err
      })
    );
});

Router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.json({
          success: false,
          message: "incorrect Email or Password"
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
          res.json({
            success: false,
            message: "incorrect Email or Password"
          });
        } else {
          res.status(200).json({
            _id: user._id,
            success: true,
            username: user.username,
            email: user.email,
            role: user.role,
            token: user.assignToken(),
            products: user.products
          });
        }
      });
    })
    .catch(err => console.log("==>>", err));
});

module.exports = Router;
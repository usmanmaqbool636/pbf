const express = require("express");
const Router = express.Router();
const User = require("../models/userModel");
const { login } = require('../auth/index');
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



Router.get('/cart/:id', login, (req, res) => {
  User.find({ _id: req.params.id })
    .select('cart')
    .populate({ path: "cart", model: "Product" })
    .then(docs => {
      res.status(200).json(docs);
    })
})
Router.put('/cart/:id', login, (req, res) => {
  User.updateOne({ _id: req.user._id }, { $pull: { cart: req.params.id } }, (err, doc) => {
    if (!err) {
      res.status(200).json({
        success: true,
        doc
      })
    }
  })
})
module.exports = Router;
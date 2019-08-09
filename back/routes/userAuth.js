const express = require("express");
const Router = express.Router();
const User = require("../models/userModel");
const Product = require('../models/productModel');
const { login } = require('../auth/index');

Router.get('/abc', (req, res) => {
  // req.io.sockets.emit('testing', { success: true, message: 'testing' });
  console.log('ok==>>')
  // req.io.sockets.on('cl', (data) => {
  //   console.log(data);
  // });


})

Router.post("/register", (req, res) => {



  const user = new User(req.body);
  token = user.assignToken();
  user
    .save()
    .then(doc => {
      return res.status(200).json({
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
      console.log(user);
      if (!user) {
        return res.json({
          success: false,
          message: "incorrect Email or Password"
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        // console.log(req.body)
        if (!isMatch) {
          console.log(isMatch)
          return res.json({
            success: false,
            message: "incorrect Email or Password"
          });
        } else {
          return res.status(200).json({
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

Router.get('/:id', login, (req, res) => {
  User.findById(req.params.id, (err, doc) => {
    if (!err) {
      return res.status(200).json({
        user: {
          username: doc.username,
          email: doc.email,
          phone: doc.phone,
          role: doc.role,
          _id: doc._id
        }, success: true
      })
    }
    return res.status(200).json({ ...doc, success: false })

  })
})
Router.post('/:id', login, (req, res) => {
  const { username, email, password, passwordConfirmation, role, phone } = req.body;
  // console.log(req.body);
  // User.update({ _id: req.params.id })
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (!err) {
      user.username = username;
      user.email = email;
      if (password && passwordConfirmation) {
        user.password = password
        user.passwordConfirmation = passwordConfirmation
      }
      user.role = role
      user.phone = phone;
      token = user.assignToken();
      user.save()
        .then(doc => {
          res.status(200).json(
            {
              _id: doc._id,
              success: true,
              username: doc.username,
              email: doc.email,
              role: doc.role,
              token
            }
          )
        })
        .catch(err => {
          res.status(200).json({
            success: false,
            err
          })
        })
    }
  })
})

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
Router.get('/order/:id', (req, res) => {

  User.findById(req.params.id)
    .then(user => {
      console.log("==>>",user.order);
      res.status(200).json({ order: user.order });
    })
})
module.exports = Router;
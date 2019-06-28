const express = require("express");
const Router = express.Router();
// const mongoose = require("mongoose");
const { login, authentic } = require("../auth");

const Product = require("../models/productModel");
const User = require("../models/userModel");
const Category = require('../models/category');
const Sub = require('../models/subCategory');

Router.get("/:id", (req, res) => {
  Product.findById(req.params.id).then(p => {
    if (p) {
      res.status(200).json(p);
    }
    res.json({
      message: "product not found"
    });
  });
});

Router.put("/:id", login, authentic, (req, res) => {
  console.log(req.params.id);
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true, useFindAndModify: false },
    (err, p) => {
      if (!err && p) {
        return res.json(p);
      }
      res.json({
        message: "product not found"
      });
    }
  );
});
Router.put("/image/:id", login, authentic, (req, res) => {
  Product.updateOne(
    { _id: req.params.id },
    { $push: { imagespath: req.body.image } },
    { new: true, upsert: true },
    (err, doc) => {
      if (!err) {
        return res.status(200).json({
          success: true,
          message: "Image uploaded"
        });
      }
      return res.json({
        success: false,
        message: "product not found"
      });
    }
  );
  console.log(req.params.id);
  console.log(req.body);
});

Router.post("/create", login, (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.user);
  newProduct.vendor = req.user._id;
  newProduct
    .save()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => {
      console.log(err);
    });
});
Router.delete("/:id", login, authentic, (req, res) => {
  Product.findByIdAndDelete(req.params.id).then(p => {
    if (p) {
      res.status(200).json({
        message: "product deleted"
      });
    }
  });
});
Router.get("/", (req, res) => {
  // res.status(200).json({
  //     success: true
  // })

  // Category.find({})
  //   .populate({
  //     path: 'subcategory',
  //     model: 'Sub'
  //   })
  //   .then(doc => res.status(200).json(doc));


  Product.find({}, (err, p) => {
    if (!err) {
      res.status(200).json({
        products: p
      });
    }
  });
});

Router.get("/myproduct/:id", login, (req, res) => {
  // User
  //     .findById(req.user._id)
  //     .then(user => Product.find(user.myProducts,(err,doc)=>{
  //         if(!err){
  //             console.log(doc)
  //         }
  //     }))
  Product.find({ vendor: req.user._id }, (err, doc) => {
    if (!err) {
      console.log(doc);
      res.status(200).json({ products: doc });
    }
  });

  // .populate("myProducts")
  //     .then(products=>{
  //         console.log(products);
  //     })
  //     .catch(err=>{
  //         console.log(err);
  //     })
});
Router.post('/category/create', (req, res) => {
  const category = new Category(req.body);
  category.save()
    .then(doc => res.status(200).json(doc))
})
Router.post('/sub/create', (req, res) => {
  const { name, id } = req.body;

  const sub = new Sub(req.body);
  sub.save()
    .then(doc => {
          res.status(200).json(doc)
      })
})
module.exports = Router;

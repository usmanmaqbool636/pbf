const express = require("express");
const Router = express.Router();
// const mongoose = require("mongoose");
const { login, authentic } = require("../auth");
const { getMeRandomElements } = require('../helper');
const Product = require("../models/productModel");
const User = require("../models/userModel");
const Review = require('../models/reviewModel')
const Category = require('../models/category');
const Sub = require('../models/subCategory');



Router.get("/myproduct", login, (req, res) => {
  Product.find({ vendor: req.user._id }, (err, doc) => {
    if (!err) {
      res.status(200).json({ products: doc });
    }
  });
});
Router.post('/review', login, (req, res) => {
  const { name, email, review, rating, product } = req.body;
  // Product.updateMany({}, { $unset: { review: 1 } }, (err, doc) => {
  //   if (!err)
  //     res.status(200).json(doc);
  //     console.log(err);
  // })

  const vewiewer = req.user._id;
  const reviewCollection = new Review({ name, product, email, review, rating, vewiewer })
  reviewCollection.save()
    .then(doc => {
      res.status(200).json(doc);
    })
})

Router.get('/review/:id', (req, res) => {
  Review.find({ product: req.params.id })
    .sort({ createdAt: -1 })
    .then(docs => {
      res.status(200).json(docs)
    })
});

Router.put("/:id", login, authentic, (req, res) => {
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
});

Router.post("/create", login, (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.vendor = req.user._id;
  newProduct
    .save()
    .then(p => {
      res.status(200).json({
        success: true,
        message: 'product created successfully',
        product: p
      });
    })
    .catch(err => {
      console.log(err);
    });
});
Router.delete("/:id", login, authentic, (req, res) => {
  Product.findById(req.params.id, (err, p) => {
    if (!err) {
      p.remove()
        .then(doc => {
          return res.status(200).json({
            success: true,
            message: "product deleted"
          })
        })
    }
    else {
      console.log('err==>>', err);
      return res.status(200).json({
        success: false,
        message: "product not deleted"
      })
    }
  })
  // Product.findByIdAndDelete(req.params.id).then(p => {
  //   if (p) {
  //     res.status(200).json({
  //       message: "product deleted"
  //     });
  //   }
  // });
});

Router.delete("/order/:id", login, (req, res) => {
  User.findById(req.user, (err, p) => {
    if (!err) {
      console.log(p.order.length)
      p.order.pop({ _id: req.params.id });
      console.log(p.order.length)
      p.save()
        .then(p1 => {
          console.log(p1.order.length)
          return res.status(200).json({
            success: true,
            message: "order discarded"
          })
        })
      // p.remove()

      //   .then(doc => {
      //     return res.status(200).json({
      //       success: true,
      //       message: "product deleted"
      //     })
      //   })
    }
    else {
      console.log('err==>>', err);
      return res.status(200).json({
        success: false,
        message: "product not deleted"
      })
    }
  })
});
Router.put("/order/:id", login, (req, res) => {
  User.findById(req.user, (err, p) => {
    if (!err) {
      const deliver = p.order.pop({ _id: req.params.id });
      p.deliverProduct.push(deliver)
      p.save()
        .then(p1 => {
          return res.status(200).json({
            success: true,
            message: "order delivered"
          })
        })
    }
    else {
      console.log('err==>>', err);
      return res.status(200).json({
        success: false,
        message: "product not deleted"
      })
    }
  })
});

Router.get("/latest", (req, res) => {
  Product.find({}, (err, p) => {
    if (!err) {
      res.status(200).json(p);
    }
  })
    .sort({ createdAt: -1 }).limit(6);
});

Router.get("/picked", (req, res) => {
  Product.find({}, (err, p) => {
    if (!err) {
      res.status(200).json(getMeRandomElements(p, 6));
    }
  })
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
Router.get('/:category/:sub', (req, res) => {
  Product.find({ 'subcategory': req.params.sub })
    .then(docs => {
      res.status(200).json(docs);
    })
})

Router.put("/cart/:id", login, (req, res) => {
  User.findByIdAndUpdate(req.user._id, { "$push": { cart: req.params.id } }, { new: true, upsert: true }, (err, doc) => {
    if (!err) {
      User.findById(req.user._id)
        .select('cart')
        .populate({ path: 'cart', model: 'Product' })
        .then(docs => {
          return res.status(200).json({
            success: true,
            message: "product added to cart",
            cart: docs.cart
          })
        })
    }
  })
})

Router.get('/:id', (req, res) => {
  const id = req.params.id;
  let i = id;
  if (id[0] === ':') {
    i = id.split(':')[1];
  }
  Product.findById(i).populate({
    path: 'vendor',
    model: 'User',
    select: { 'username': 1 },
  }).then(p => {
    if (p) {
      console.log(p)
      return res.status(200).json(p);
    }
    return res.json({
      message: "product not found"
    });
  });
});
Router.post('/order', login, (req, res) => {
  // console.log(req.body);
  req.body.cart.forEach(c => {
    User.updateOne(
      { _id: c.vendor },
      {
        $push: {
          order: {
            productId: c._id,
            qty: c.qty || 1,
            deliverto: req.body.userId,
            detail: req.body.detail

          }
        }
      },
      { new: true },
      (err, doc) => {
        if (!err) {
          User.findById(req.body.userId)
            .then(u => {
              if (u) {
                u.cart=[]
                u.save()
                  .then(()=>{
                    return res.status(200).json({
                      success: true,
                      message: ""
                    });
                  })
              }
            })
        }
        // return res.json({
        //   success: false,
        //   message: "User not Found"
        // });
      }
    )


    // User.findById(c.vendor)
    //   .then(user => {
    //     user.push({
    //       productId: c._id,
    //       qty: c.qty || 0,
    //       deliverto: req.body.userId
    //     })
    //     user.save(r => {
    //       console.log(r);
    //     })
    //   })
  })
})

module.exports = Router;

const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose')
const { login, authentic } = require('../auth');

const Product = require('../models/productModel')
const User = require('../models/userModel');

Router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(p => {
            if (p) {
                res.status(200).json(p);
            }
            res.json({
                message: 'product not found'
            })
        })
})


Router.put('/:id', login, authentic, (req, res) => {
    console.log(req.params.id)
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false }, (err, p) => {
        if (!err && p) {
            return res.json(p)
        }
        res.json({
            message: 'product not found'
        })
    })
})

Router.post('/create', login, (req, res) => {
    const newProduct = new Product(req.body);
    console.log(req.user);
    newProduct.vendor = req.user._id;
    newProduct.save()
        .then(p => {
            res.status(200).json(p);
        })
        .catch(err => {
            console.log(err);
        })
})
Router.delete('/:id', login, authentic, (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(p => {
            if (p) {
                res.status(200).json({
                    message: 'product deleted'
                })
            }
        })
})
Router.get('/', (req, res) => {
    // res.status(200).json({
    //     success: true
    // })
    Product.find({}, (err, p) => {
        if (!err) {
            res.status(200).json({
                products: p
            })
        }
    })
})

Router.get('/myproduct/:id', login, (req, res) => {
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
            res.status(200).json({products: doc})
        }
    })



    // .populate("myProducts")
    //     .then(products=>{
    //         console.log(products);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
})
module.exports = Router;
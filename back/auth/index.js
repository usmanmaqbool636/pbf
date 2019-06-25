require('dotenv').config();
const jwt = require('jsonwebtoken');
const Product = require('../models/productModel');

const login = (req, res, next) => {
    console.log('login');
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRETORKEY, (err, decode) => {
            if (!decode) {
                return res.json({
                    success: false,
                    message: 'please login first'
                })
            }
            else {
                req.user = decode;
                return next();
            }
        })
    }
    else {
        return res.json({
            success: false,
            message: 'please login first'
        })
    }
}

const admin = (req, res, next) => {
    console.log('after login');
    if (req.user.role == 1) {
        next();
    }
    else {
        res.json({
            success: false,
            message: 'you are not authentic to write exam'
        })
    }
}
const authentic = (req, res, next) => {
    console.log('authentic')
    Product.findById(req.params.id)
        .then(doc => {
            if (doc) {
                if (doc.vendor == req.user._id) {
                    next();
                }
                else {
                    res.json({
                        success: false,
                        message: "you are not authorized to this product"
                    })
                }
            }
            else {
                res.json({
                    success: false,
                    message: " product not found"
                })
            }
        })
}

module.exports = { login, admin, authentic }
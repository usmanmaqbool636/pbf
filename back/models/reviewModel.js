const mongoose = require("mongoose");
const { Schema } = mongoose;
const Product = require('../models/productModel');
const reviewSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        vewiewer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }, {
        timestamps: true
    }
);
reviewSchema.pre('save', function (next) {
    Product.updateOne({ _id: this.product }, { $push: { review: this._id } }, { new: true, upsert: true },(err,doc)=>{
        if(!err){
            next()
        }
        next(err);
    })
})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
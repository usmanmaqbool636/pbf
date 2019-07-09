const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./userModel");
const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 200,
      minlength: 5
    },
    price: {
      type: Number,
      required: true
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    desription: {
      type: String,
      required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: 'Sub'
    },
    imagespath: {
      type: [String],
      required: true
    },

    specification: {
      type: String
    },
    brand: String,
    review: {
      rating: String,
      comments: [
        {
          type: String,
          required: true
        }
      ]
    }
  },
  { timestamps: true }
);
productSchema.pre("save", function (next) {
  User.updateOne(
    { _id: this.vendor },
    { $push: { myProducts: this._id } },
    { new: true, upsert: true },
    (err, docs) => {
      if (err) {
        return next(err);
      }
      next();
    }
  );
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

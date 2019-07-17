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
    // brand: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Brand'
    // },
    review: {
      type: [Schema.Types.ObjectId],
      ref: 'Review'
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
productSchema.pre('remove', function (next) {

  User.updateOne({ _id: this.vendor }, { $pull: { myProducts: this._id } }, { upsert: true, new: true },(err,doc)=>{
    if(!err){
      console.log(doc);
      next();
    }
    else{
      next({success:false,message:"product not deleted from user account" })
    }
  })
  // console.log("==>>>", this)
  next();
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

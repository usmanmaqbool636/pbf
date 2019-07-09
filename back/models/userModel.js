const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isEmail } = require("../validator/index");
require("dotenv").config();
const userSchema = new Schema(
  {
    username: {
      type: String,
      maxlength: [20, "length not grather than 20"],
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    passwordConfirmation: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      default: 0
    },
    myProducts: {
      type: [Schema.Types.ObjectId],
      ref: "Product"
    },
    cart: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
      // quantity: {
      //   type: Number,
      //   default: 0
      // }
    }
  },
  { timestamps: true }
);
userSchema.pre("validate", async function (next) {
  const { username, email, phone, password, passwordConfirmation } = this;
  const err = {};
  console.log(phone);

  if (!isEmail(email)) {
    err.email = "invalid email";
  }
  if (!email.length) {
    err.email = "email is required";
  }
  if (!phone) {
    err.phone = "phone is required";
  }
  if (username.length > 20 || username.length < 5) {
    err.username = "username length must between 5 and 30";
  }
  if (!username.length) {
    err.username = "username is required";
  }
  if (!password) {
    err.password = "password is required";
  }

  if (password !== passwordConfirmation) {
    console.log(password, passwordConfirmation);
    err.password = "password must match";
  }

  const res = await User.findOne({ email });
  if (res) {
    err.email = "email already taken";
  }
  if (Object.values(err).length) {
    return next(err);
  }
  return next();
});
userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return next(err);
    return next(null, isMatch);
  });
};
userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(this.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    user.passwordConfirmation = hash;
    next();
  });
});

userSchema.methods.assignToken = function (next) {
  const { username, email, role, _id } = this;
  const token = jwt.sign(
    { _id, username, email, role },
    process.env.SECRETORKEY,
    { expiresIn: "7 days" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;

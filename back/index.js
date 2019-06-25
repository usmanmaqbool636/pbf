const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Auth = require("./routes/userAuth");
const bodyparser = require("body-parser");
const morga = require("morgan");
const cors = require("cors");
const Product = require("./routes/Product");

mongoose.connect(
  "mongodb://localhost:27017/pbf_dev",
  { useNewUrlParser: true },
  function(err, connect) {
    if (err) return console.log("database not connected");
    else {
      console.log("database connected to exam");
    }
  }
);
app.use(morga("dev"));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/api/user", Auth);
app.use("/api/product", Product);

app.get("/abc", (req, res) => {
  res.send("ok");
});

app.listen(3080, function() {
  console.log("server is runnig on port 3080");
});
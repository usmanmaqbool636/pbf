const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Auth = require("./routes/userAuth");
const bodyparser = require("body-parser");
const morga = require("morgan");
const cors = require("cors");
const Product = require("./routes/Product");

const Sub = require('./models/subCategory');
const Category = require('./models/category');
const Brand = require('./models/brand');
const User = require('./models/userModel');

// socket io
var http = require('http').Server(app);
const io = require('socket.io')(http);

mongoose.connect(
  "mongodb://localhost:27017/pbf_dev",
  { useNewUrlParser: true },
  function (err, connect) {
    if (err) return console.log("database not connected");
    else {
      console.log("database connected to exam");
    }
  }
);
mongoose.set('useFindAndModify', false);
app.use(morga("dev"));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use((req, res, next) => {
  req.io = io;
  next();
});
process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error);
});
app.use("/api/user", Auth);
app.use("/api/product", Product);

app.get('/api/cat', (req, res) => {
  Category.find({})
    .select({ subcategory: 0 })
    .then(doc => {
      res.status(200).json(doc)
    })
})
app.get('/api/sub/:id', (req, res) => {
  Sub.find({ category: req.params.id })
    .then(doc => res.status(200).json(doc))
})
app.get('/api/sub', (req, res) => {
  Category.find({})
    .populate({ path: "subcategory", model: "Sub" })
    .then(doc => res.status(200).json(doc))
})

app.post('/api/brand', (req, res) => {
  const brand = new Brand(req.body);
  brand.save()
    .then(docs => {
      res.status(200).json(docs)
    })
})


// name space socket io
// var nsp = io.of('/my-namespace');
// nsp.on('connection', function (socket) {
//   console.log('==>> someone connected');
//   nsp.emit('hi', 'Hello everyone!');
// });

// let clients = 0;
io.on('connection', function (socket) {
  console.log('A user connected');
  socket.id = "abc";
  // console.log(socket.id,socket.client.id)
  io.to(`${socket.id}`)
  socket.on('placeorder', (data) => {
    User.findById(data.vendor, (err, user) => {
      if (!err) {
        socket.emit('user', { user, success: true })
      }
      else {
        socket.emit('notuser', { success: false, message: 'not found' })
        console.log('user not found');
      }
    })
  })
  // setInterval(() => socket.emit('testing', { success: true, message: 'downloading' }), 2000)
  // clients++;
  // socket.on('cl',(data)=>{
  //   setTimeout(()=>{
  //     socket.emit('bk',{...data})
  //   },5000)
  //   console.log(data)
  // })
  // io.sockets.emit('broadcast', { description: clients + ' clients connected!' });


  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
});


http.listen(3080, function () {
  console.log('listening on *:3000');
});

// app.listen(3080, function () {
//   console.log("server is runnig on port 3080");
// });
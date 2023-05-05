const express = require('express');
const mongoose = require('mongoose');
const router =require("./router/user.js")
const app = express();
const bodyParser=require("body-parser")
require("dotenv").config()
const PORT = process.env.PORT;

// Connect to MongoDB database
mongoose.connect(process.env.DBURL, {
    dbName:process.env.DBNAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database!');
}).catch((error) => {
  console.log('Error connecting to database: ', error);
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
  
  // Mount the middleware on a specific path
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use('/v1', router);
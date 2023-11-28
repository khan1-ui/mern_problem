// Basic library dependency import
const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const path = require('path');
const bodyParser = require('body-parser');


// Security middleware library import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');



 //Database library import
const mongoose = require('mongoose');
let URI ="mongodb+srv://user1111:user1111@cluster0.upzps2o.mongodb.net/CRUD?retryWrites=true&w=majority"
//mongoose.connect(URI)
//console.log("Db connected")
// Security middleware implement
async function main() {
  try {
      await mongoose.connect(URI)
      console.log("DB connected")

  } catch (error) {
      console.log("failed", error)
      
  }    
}
main()

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

// bodyParser import
app.use(bodyParser.json());

// Request rate limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Managing front-end routing
app.use(express.static('client-site/build'));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client-site','build', 'index.html'));
});

//Managing back-end routing

app.use("/api/v1",router)

module.exports= app ;
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);

mongoose.connect(`${process.env.MONGODB_KEY}`, () => {
  console.log('connected to mongodb')
})

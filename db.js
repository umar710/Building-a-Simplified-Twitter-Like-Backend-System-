const mongoose = require("mongoose");

require("dotenv").config();

const mongooseURL = process.env.MONGODB_URL;

const db = async () => {
  try {
    await mongoose.connect(mongooseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected..");
  } catch (e) {
    console.log(`DB Error ${e.message}`);
  }
};

db(mongoose.connection);

module.exports = db;

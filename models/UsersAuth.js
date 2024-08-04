const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserAuthSchema = mongoose.model("User", mongooseSchema);
module.exports = UserAuthSchema;

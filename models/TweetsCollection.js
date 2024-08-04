const mongoose = require("mongoose");

const mongooseSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TweetSchemaData = mongoose.model("Tweet", mongooseSchema);
module.exports = TweetSchemaData;

const express = require("express");
const router = express.Router();

const TweetSchemaData = require("../models/TweetsCollection");

//Tweet POST Method
router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const newData = new TweetSchemaData(data);
    const responseData = await newData.save();
    response.status(200).json("Tweet posted successfully..");
  } catch (e) {
    response.status(500).json(`Internal Error..${e.message}`);
  }
});

//Tweet GET Method
router.get("/", async (request, response) => {
  try {
    const data = request.body;
    const getTweet = await TweetSchemaData.find(data);
    response.status(200).json(getTweet);
  } catch (e) {
    response.status(500).json(`Internal Server Error ${e.message}`);
  }
});

//Fetch User Timeline It's Optional inCompleted...
//Tweet TimeLine
router.get("/:userId/timeline", async (request, response) => {
  try {
    const { userId } = request.params;
    const data = request.body;
    const tweets = await TweetSchemaData.find({ userId });
    response.status(200).json(tweets);
  } catch (e) {
    response.status(500).json("Internal Server Error...");
  }
});

module.exports = router;

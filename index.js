//network call using Express JS
const express = require("express");

//db.js
const db = require("./db");
const app = express();

//Middelewear
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Use CORS to handle cross-origin requests
const cors = require("cors");
app.use(cors());

//.env
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const authorizationToken = require("./AuthorizationToken");

const AuthUser = require("./routes/Auth");
app.use("/api/users/", AuthUser);

const Tweets = require("./routes/Tweet");
app.use("/api/tweets", authorizationToken, Tweets);

app.listen(PORT, () => {
  console.log("Server Runing... http://localhost:3000/");
});

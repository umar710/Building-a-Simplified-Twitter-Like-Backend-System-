const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorizationToken = async (request, response, next) => {
  try {
    let jwtToken; // first check request headers has authorization or not
    const authHeader = await request.headers["authorization"];
    if (authHeader !== undefined) {
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401);
      response.send("Invalid JWT Token");
    } else {
      jwt.verify(jwtToken, process.env.SECRET_TOKEN, async (error, payload) => {
        if (error) {
          response.status(401);
          response.send("Invalid JWT Token");
        } else {
          request.username = payload.username;
          next();
        }
      });
    }
  } catch (e) {
    response.status(500).json("Internal Error");
  }
};

module.exports = authorizationToken;

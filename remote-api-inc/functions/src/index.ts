import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import axios from "axios";
// import cors from "cors";

const forwardUrl = "https://api.deezer.com/";


exports.handleRequest = onRequest(async (req, res)=> {
  const hook = req.query.hook;
  const path = req.query.path;
  logger.info("hook: " + hook);
  logger.info("path: " + path);

  if (!hook) {
    res
      .set("Access-Control-Allow-Origin", "*")
      .status(400).send("No hook provided");
  }

  if (hook == "artist") {
    const path = req.query.path;
    const response = await axios.get(forwardUrl + "artist" + path);
    res
      .set("Access-Control-Allow-Origin", "*")
      .status(200).send(response.data);
  }

  if (hook == "tracks") {
    const path = req.query.path;
    const response = await axios.get(forwardUrl + "artist" + path);
    res
      .set("Access-Control-Allow-Origin", "*")
      .status(200).send(response.data);
  }

  if (hook == "album") {
    const path = req.query.path;
    const response = await axios.get(forwardUrl + "album" + path);
    res
      .set("Access-Control-Allow-Origin", "*")
      .status(200).send(response.data);
  }

  if (hook == "search") {
    const searchString = req.query.queryString;

    const response = await axios.get(forwardUrl + "search?q=" + searchString);
    res
      .set("Access-Control-Allow-Origin", "*")
      .status(200).send(response.data);
  }
});

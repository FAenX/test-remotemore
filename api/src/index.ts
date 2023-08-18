import express from "express";
import http from "http";


const port = 8080 || process.env.PORT

const app = express();
const server = new http.Server(app);

server.listen((port: number) => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
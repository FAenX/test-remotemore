import express, { Request, Response } from "express";
import http from "http";
import { TracksRoutes } from "./routes/tracks.routes.config";
import { CommonRoutesConfig } from './common/common.routes.config';
import debug from 'debug';
import cors from "cors";
import * as winston from 'winston';
import * as expressWinston from 'express-winston';

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

const port = process.env.PORT || 8080; // Corrected the port assignment order

const routes: CommonRoutesConfig[] = []; // Changed the array type

const debugLog: debug.IDebugger = debug('app');

const app = express();
const server = http.createServer(app); // Used http.createServer instead of new http.Server

app.use(expressWinston.logger(loggerOptions));
debugLog(`Routes configured for ${process.env.DEBUG}`);
debugLog(`Routes configured for ${process.env.PORT}`);

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(cors());

routes.push(new TracksRoutes(app));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("API is running");
});

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(`Server running at http://localhost:${port}`);
});

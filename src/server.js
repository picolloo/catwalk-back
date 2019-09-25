import Koa from "koa";
import dotenv from "dotenv";
dotenv.config();

import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

import router from "./routes";
import initDatabase from "./database";

initDatabase(process.env.DATABASE_URI);

const app = new Koa();

// Middlewares
app
  .use(json())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log("Server bound to port 3000"));

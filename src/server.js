import Koa from "koa";
import dotenv from "dotenv";
import cors from "@koa/cors";
dotenv.config();

import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

import router from "./routes";
import initDatabase from "./database";

const PORT = process.env.PORT || 3000;

const app = new Koa();

app.on("error", err => {
  console.error(err.stack);
  console.log(err.message);
});

initDatabase(process.env.DATABASE_URI);

// Middlewares
app
  .use(cors())
  .use(json())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => console.log(`Server bound to port ${PORT}`));

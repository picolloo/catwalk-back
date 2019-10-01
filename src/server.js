import Koa from "koa";
import dotenv from "dotenv";
import cors from "@koa/cors";
import json from "koa-json";
import logger from "koa-logger";
import bodyParser from "koa-body";

import router from "./routes";
import initDatabase from "./database";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = new Koa();

app.on("error", (err, ctx) => {
  console.error(err.stack);
  console.log(err.message);
});

initDatabase(process.env.DATABASE_URI);

// Middlewares
app
  .use(cors())
  .use(json())
  .use(logger())
  .use(bodyParser({ multipart: true }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => console.log(`Server bound to port ${PORT}`));

import Koa from 'koa';
import dotenv from 'dotenv';
dotenv.config();

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';

import router from './routes';
import initDatabase from './database';

const app = new Koa();

// app.use(async ctx => {
//   try {
//     ctx.database = await initDatabase(
//       `${__dirname}/database/mongo`,
//       process.env.DATABASE_URI
//     );
//   } catch (e) {
//     console.error(e);
//   }
// });

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server bound to port 3000'));

import * as Koa from 'koa';
import * as Router from 'koa-router';

import * as logger from 'koa-logger';
import * as json from 'koa-json';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello TS' };

  await next();
});

router.get('/about', async (ctx, next) => {
  ctx.body = { msg: 'Hello about' };

  await next();
});

// Middlewares
app.use(logger());
app.use(json());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server bound to port 3000'));

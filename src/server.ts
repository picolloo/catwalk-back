import * as Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello TS';

  await next();
});

app.listen(3000, () => console.log('Server bound to port 3000'));

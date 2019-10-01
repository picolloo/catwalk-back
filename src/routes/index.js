import Router from 'koa-router';

import storage from '../storage';
import MarketController from '../controllers/market';

const router = new Router();

router.get('/', MarketController.find);

router.get('/:id', MarketController.findById);

router.post('/', MarketController.add);

router.delete('/:id', MarketController.remove);

router.put('/:id', MarketController.update);

router.post('/upload', async ctx => {
  const { file } = ctx.request.files;

  const { key, url } = await storage.uploadFile({
    fileName: file.name,
    filePath: file.path,
    fileType: file.type
  });

  ctx.body = { key, url };
});

export default router;

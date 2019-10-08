import storage from "../storage";

/**
 * Upload a file to the storage
 * @param {ctx} Koa Context
 */
const store = async ctx => {
  try {
    const urls = await Promise.all(
      Object.values(ctx.request.files).map(async image => {
        const { url } = await storage.uploadFile({
          fileName: image.name,
          filePath: image.path,
          fileType: image.type
        });

        return url;
      })
    );

    ctx.body = urls;
  } catch (err) {
    ctx.throw(422);
  }
};

export default {
  store
};

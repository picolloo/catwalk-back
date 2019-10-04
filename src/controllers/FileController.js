import storage from "../storage";

/**
 * Upload a file to the storage
 * @param {ctx} Koa Context
 */

const handleUpload = async ctx => {
  try {
    if (ctx.request.files) {
      const { file } = ctx.request.files;
      const url = await uploadFile(file);
      ctx.body = url;
    }
  } catch (err) {
    ctx.throw(422);
  }
};

const uploadFile = async file => {
  const { url } = await storage.uploadFile({
    fileName: file.name,
    filePath: file.path,
    fileType: file.type
  });

  return url;
};

export default {
  handleUpload
};

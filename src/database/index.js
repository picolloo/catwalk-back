import fs from 'fs';
import path from 'path';

import mongoose from 'mongoose';

/**
 *  Creates the Mongoose model from Model directory files
 */
const createMongoModel = async (modelName, modelDir) => {
  const model = await import(path.resolve(modelDir, modelName));

  const schema = new mongoose.Schema(model);

  return mongoose.model(modelName, schema);
};

const initDatabase = async (modelsDir, databaseUri) => {
  try {
    mongoose.connect(databaseUri, { useNewUrlParser: true });

    const db = {};

    const files = fs.readdirSync(modelsDir);

    files.forEach(async file => {
      const fileName = file.replace(/\.js$/, '');

      db[fileName] = await createMongoModel(fileName, modelsDir);

      console.info(`Model being loaded: ${fileName}`);
    });

    return Promise.resolve(db);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default initDatabase;

import * as fs from 'fs';
import * as path from 'path';

import * as mongoose from 'mongoose';

/**
 *  Creates the Mongoose model from Model directory files
 */
const createMongoModel = async (modelName: string, modelDir: string) => {
  const model = await import(path.resolve(modelDir, modelName));

  const schema = new mongoose.Schema(model);

  return mongoose.model(modelName, schema);
};

const initDatabase = async (modelsDir: string, databaseUri: string) => {
  try {
    mongoose.connect(databaseUri, { useNewUrlParser: true });

    const db = {};

    const files = fs.readdirSync(modelsDir);

    files.forEach(async file => {
      const fileName = file.replace(/\.(j|t)s$/, '');

      db[fileName] = await createMongoModel(fileName, modelsDir);

      console.info(`Model being loaded: ${fileName}`);
    });

    return Promise.resolve(db);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default initDatabase;

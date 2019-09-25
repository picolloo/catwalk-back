import mongoose from "mongoose";

import Market from "./models/Market";

export default async databaseUri => {
  try {
    mongoose.connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    return async (ctx, next) => {
      ctx.Market = Market;
      await next();
    };
  } catch (err) {
    throw new Error("Error trying to connect to MongoDB");
  }
};

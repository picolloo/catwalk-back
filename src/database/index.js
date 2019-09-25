import mongoose from "mongoose";

export default async databaseUri => {
  try {
    mongoose.connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    throw new Error("Error trying to connect to MongoDB");
  }
};

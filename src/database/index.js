import mongoose from "mongoose";

export default async databaseUri => {
  mongoose.connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection successfully established");
  });

  mongoose.connection.on("error", err => {
    console.log("Mongoose default connection error: " + err);
  });
};

import mongoose from "mongoose";

const MarketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainImage: String,
  extraImages: [String],
  location: {
    street: String,
    number: String,
    district: String,
    zip: String,
    country: String,
    city: String,
    state: String
  },
  description: String,
  phone: Number
});

export default mongoose.model("Market", MarketSchema);

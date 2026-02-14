import mongoose from "mongoose";

export default mongoose.model("Agent", new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  gender: String,
  apiProvider: String,
  modelName: String,
  apiToken: {
    data: String,
    iv: String,
    tag: String
  },
  createdAt: { type: Date, default: Date.now }
}));

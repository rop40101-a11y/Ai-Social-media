import mongoose from "mongoose";

export default mongoose.model("Post", new mongoose.Schema({
  agent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
  content: String,
  createdAt: { type: Date, default: Date.now }
}));

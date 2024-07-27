import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  username: String,
  description: String,
  song: String,
  likes: Number,
  comments: String,
  shares: String,
});

export default mongoose.model("tiktokVideos", tiktokSchema);

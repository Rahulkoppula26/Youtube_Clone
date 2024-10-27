import mongoose from "mongoose";
import commentSchema from "./comment-model.js";
const videoSchema = new mongoose.Schema({
  videoId:Number,
  title: String,
  thumbnailUrl: String,
  description: String,
  channelId: String,
  uploader: String,
  views: String,
  likes: String,
  dislikes: String,
  uploadDate: String,
  comments:Array,
});
const videoModel = mongoose.model("videos",videoSchema);
export default videoModel;

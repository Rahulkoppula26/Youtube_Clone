import mongoose from "mongoose";
const channelSchema = new mongoose.Schema({
    channelId: String,
    channelName:String,
    owner: String,
    channelBanner: String,
    description: String,
    subscribers: String,
    videos:Array,
});
const channelModel = mongoose.model("channel",channelSchema);
export default channelModel;

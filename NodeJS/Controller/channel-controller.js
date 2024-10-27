import channelModel from "../Models/channel-model.js";
import { createChannelVideos } from "./channelVideos-controller.js";

export function createChannel(req, res) {
    const {
        channelId,channelName,owner,description,channelBanner,subscribers,videos={createChannelVideos}} = req.body;
    const newChannel = new channelModel({
        channelId,
        channelName,
        owner,
        description,
        channelBanner,
        subscribers,
        videos 
    });
    //   saving the data in the database/server and erroe handling is applied
    newChannel
      .save()
      .then((data) => {
        if (!data) {
          return res.status(400).send("Something went wrong");
        }
        res.send(data);
      })
      .catch((err) => res.status(500).json({ Message: err.message }));
}
// fetching the channel data fro database
export function fetchChannel(req, res) {
    channelModel.find().then((data) => {
      if (!data) {
        return res.status(400).send({ message: err.message });
      }
      res.status(200).send(data);
    }).catch(err => res.status(500).json({message : err.message}))
  }
    
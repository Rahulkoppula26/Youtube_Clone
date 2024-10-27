import { createChannelVideos, deleteOneVideo, fetchChannelVideos, updateOneVideo } from "../Controller/channelVideos-controller.js";

export function channelVideosRoutes(app){
    app.post("/channelvideo",createChannelVideos);
    app.get("/channelvideos",fetchChannelVideos);
    app.put("/channelvideo/:id",updateOneVideo);
    app.delete("/channelvideo/:id",deleteOneVideo)
}
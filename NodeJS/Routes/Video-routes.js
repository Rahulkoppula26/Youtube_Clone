import { createVideo, deleteOneVideo, fetchVideo, fetchVideos, updateOneVideo } from "../Controller/Video-controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function videoRoutes(app){
    app.post("/video",createVideo);
    app.get("/videos",fetchVideos);
    app.get("/videos/:id",fetchVideo);
    app.put("/video/:id",updateOneVideo);
    app.delete("/video/:id",deleteOneVideo)
}
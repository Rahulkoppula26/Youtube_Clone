import { createChannel, fetchChannel } from "../Controller/channel-controller.js"
export function channelRoutes(app) {
    app.post("/channel",createChannel)
    app.get("/channel",fetchChannel)
}
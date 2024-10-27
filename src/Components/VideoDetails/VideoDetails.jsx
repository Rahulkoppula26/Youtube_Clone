import "./VideoDetails.css"
import video from "../videos/videoplayback (1).mp4"
function VideoDetails(props){
    return (
        <>
        {/* video details format structure */}
        <div className="video-details" >
            <div>
                <video   src={video} poster={props.video.thumbnailUrl} className="video-shape"  width="300" height="170"  muted loop>
                </video>
                <p className="title" >{props.video.title} </p>
                <div className="channel" >
                   <span className="channel-id" >{props.video.channelId} </span>
                   <div>
                     <span className="views" >{props.video.views} Views  </span>
                     <span className="uploadDate" > •  {props.video.uploadDate} </span>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default VideoDetails;
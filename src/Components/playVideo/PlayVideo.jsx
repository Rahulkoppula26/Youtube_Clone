import "./PlayVideo.css";
import video from "../videos/videoplayback (1).mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp,faThumbsDown,faShare,faDownload,faEllipsis,faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Recommended from "../Recommended/Recommended";
function PlayVideo(props) {
  const [commentData,setCommentData] =  useState([])
  const [options,setOptions] = useState(false);
  useEffect(()=>{
    setCommentData(props.fetching.comments);
  },[props.fetching.comments]);
  
  return (
    <>
    {/* playing  video page */}
    {props.fetching ? (
    <section className="entire-page" >
      <section className="Play-video" >
        <div className="center-video">
          <div className="main-video" >
             <video className="inner-video" width="800px" height="450px" controls src={video}></video>
             </div>
          <p className="title-name" >{props.fetching.title} </p>
          <div className="channel-data" >
            <div className="channel-data1" >
               <p>{props.fetching.channelId} </p>
               <button type="button" className="video-likes" >Join</button>
               <button type="button" className="Subscribe" >Subscribe</button>
            </div>
            <div  className="channel-data2">
              {/* video player icons to subscribe like dislike etc */}
              <button type="button" className="video-likes" ><FontAwesomeIcon icon={faThumbsUp} /> {props.fetching.likes} </button>
              <button type="button" className="video-likes"><FontAwesomeIcon icon={faThumbsDown} />  {props.fetching.dislikes} </button>
              <button type="button" className="video-likes"><FontAwesomeIcon icon={faShare} /> Share</button>
              <button type="button" className="video-likes" ><FontAwesomeIcon icon={faDownload} /> Download</button>
              <button type="button" className="video-likes"><FontAwesomeIcon icon={faEllipsis} /></button>
            </div>

          </div>
          {/* fetching views  */}
          <div className="desc-container" >
            <span className="views-data" >{props.fetching.views} Views</span>
            <span className="uploadDate-data" > • {props.fetching.uploadDate} </span>
            <p>{props.fetching.description}</p>
          </div>
          <div>
            <h3>Comments</h3>
           {/* displaying comments of random users */}
              {Array.isArray(commentData) && commentData.map((comment) => {
               return (
                <>
                  <div className="all-comments" key={comment._id} >
                    <div className="comment-section" key={comment._id} >
                    <p  ><span className="user-id" >{comment.userId}</span>  <span>{comment.timestamp} </span></p>
                    <p className="comment-text" >{comment.text} </p>
                    <div className="thumbs" ><span><FontAwesomeIcon icon={faThumbsUp} /></span><span><FontAwesomeIcon icon={faThumbsDown} /></span> </div>
                  </div>
                  <div className="options" >
                    <FontAwesomeIcon onClick={()=>setOptions(true)} icon={faEllipsisVertical} />
                    {options ? (
                      <div className="option-buttons" >
                        <button onClick={()=>setOptions(false)} >Delete</button>
                        <button onClick={()=>setOptions(false)} >Edit</button>
                      </div>
                      ):""}
                    </div>
                  </div>
                </>
               )
              })}
          </div>
        </div>
        
        
      </section>
      <section>
        {/* recommended videos in video player page */}
      </section>
        <Recommended/>
      </section>
      ):(<div>Loading....</div>)}
    </>
  );
}
export default PlayVideo;

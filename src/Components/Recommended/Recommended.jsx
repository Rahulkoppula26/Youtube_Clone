import { useState,useEffect } from "react";
import "./Recommended.css"
function Recommended(){
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      fetchData();
    },[]);
    // fetching videos from local api
    async function fetchData() {
      const res = await fetch("http://localhost:3000/videos",{
        method:"GET",
            headers: {
              'Content-Type': 'application/json',
            },
      });
      const data = await res.json();
      setVideos(data)
    }
    
    return (
      <>
        <div className="recommended">
          <div className="all-videos" >
            {videos.map((video) =>{
                return(
                  
                    // <div key={video._id}>
                      // {/*recommended  videos structure  */}
                        <div className="every-video" key={video._id} >
                           <div> <video poster={video.thumbnailUrl} className="shape" width="180" height="100"  muted loop></video></div>
                            <div className="video-content">
                                <p className="recom-title" >{video.title} </p>
                                <div className="channel" >
                                   <span className="channel-id" >{video.channelId} </span>
                                   <div>
                                     <span className="views1" >{video.views} Views  </span>
                                     <span className="uploadDate1" > •  {video.uploadDate} </span>
                                   </div>
                                </div>
                            </div>
                       
                        </div>
                    // </div>
                )
            })}
          </div>
        </div>
      </>
    );
}
export default Recommended;
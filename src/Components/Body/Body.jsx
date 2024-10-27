import "./Body.css"
import { useState,useEffect } from "react";
import VideoDetails from "../VideoDetails/VideoDetails";
import { Link } from "react-router-dom";
function Body(props){
    const [videos, setVideos] = useState(props.finalFilteredVideo);
    const [category,setCategory] =useState(0);
    // using statemanagement to store the videos data
    useEffect(() => {
      // for filter default behavior
      if (category === 0) {
        setVideos(props.finalFilteredVideo); // All videos
    } else {
      // remaining filter option and filtering according to category
        const filteredVideos = props.finalFilteredVideo.filter((video) => video.videoId === category); 
        setVideos(filteredVideos);
    }
    },[props.finalFilteredVideo,category]);
    return (
      <>
        <div className="body">
          {/* Filter options  */}
          <div className="filtering" >
            <li className={`filter-link ${category===0 ?"active":""}`} onClick={()=>setCategory(0)} ><p>All</p></li>
            <li className={`filter-link ${category===1 ?"active":""}`} onClick={()=>setCategory(1)} ><p>Music</p></li>
            <li className={`filter-link ${category===2 ?"active":""}`} onClick={()=>setCategory(2)} ><p>Dance</p></li>
            <li className={`filter-link ${category===3 ?"active":""}`} onClick={()=>setCategory(3)} ><p>Javascript</p></li>
            <li className={`filter-link ${category===4 ?"active":""}`} onClick={()=>setCategory(4)} ><p>React</p></li>
            <li className={`filter-link ${category===5 ?"active":""}`} onClick={()=>setCategory(5)} ><p>Gaming</p></li>
            <li className={`filter-link ${category===6 ?"active":""}`} onClick={()=>setCategory(6)} ><p>Webdevelopment</p></li>
          </div>
          <div className="all-videos" >
            {/* iterating throught each video and fetching the video data to home page */}
            {videos.map((video) =>{
                return(
                    <Link to={`/body/${video._id}`}  key={video._id}>

                        <div className="each-videos" key={video._id} >
                          <VideoDetails key={video._id} video={video} />
                        </div>
                    </Link>
                )
            })}
          </div>
        </div>
      </>
    );
}
export default Body;
import { useEffect, useState } from "react"
import image from "../Image/bg.jpg"
import image1 from "../Image/Profile.png"
import "./UserAccount.css"
function UserAccount() {
    const [channelData,setChannelData]=useState([]);
    const [channelVideos,setChannelVideos] = useState([]);
    useEffect(()=>{
        fetchingData();
    },[])
    // fetching data from local api routes
    async function fetchingData() {
        const token = localStorage.getItem("accessToken");
        const res = await fetch("http://localhost:3000/channel",{
            method:"GET",
            headers: {
              'Content-Type': 'application/json',
              authorisation:`JWT ${token}`
            },
        })
        const data = await res.json();
        setChannelData(data[0]);
        setChannelVideos(data[0].videos)
    }
    console.log(channelData);
    return (
        <>
        <div>
            {/* creating user channel details */}
            <center><img className="image1" src={channelData.channelBanner} alt="" width="1000px" height="200px" /></center>
            <div className="account-data" >
                <div><img src={image1} alt="" width="200px" height="200px" /></div>
                <div className="channel-info" >
                    <p>{channelData.channelName}</p>
                    <p><span>{channelData.channelId} </span><span>  {channelData.subscribers} subscribers </span><span> 7 videos</span></p>
                    <p className="p" > {channelData.description} </p>
                    <button type="button" className="Subscribe" >Subscribe</button>
                </div>
            </div>
            {/* navigation buttons for user  stuff */}
            <div className="navigation" >
                <li>Home</li>
                <li>Videos</li>
                <li>Shorts</li>
                <li>Live</li>
                <li>Playlist</li>
                <li>Community</li>
            </div>
            <div className="popularity" >
                <button type="button" className="popularity1" >Latest</button>
                <button type="button" className="popularity2" >Popular</button>
                <button type="button" className="popularity3" >Oldest</button>
            </div>
            <div className="all-videos-channel" >
            {/* user uploded videos */}
            {Array.isArray(channelVideos) && channelVideos.map((video) => {
                return (
                    <>
                    <div className="each-videos-channel" key={video._id} >
                      <div className="all-channel-data" key={video._id} video={video} >
                            <video poster={video.thumbnailUrl} src={video} className="video-shape"  width="300" height="170"  muted loop></video>
                            <div className="channel" >
                               <p className="title" >{video.title} </p>
                                <span className="channel-id" >{video.channelId} </span>
                                <div>
                                  <span className="views" >{video.views} Views  </span>
                                  <span className="uploadDate" > •  {video.uploadDate} </span>
                                </div>
                            </div>
                       </div>
                    </div>
                </>
                )
            })}
            </div>
        </div>
        </>
    )
}
export default UserAccount;
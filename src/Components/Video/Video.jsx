import Header from "../Header/Header";
import PlayVideo from "../playVideo/PlayVideo";
import { useEffect, useState } from "react";
import "./Video.css"
import { useParams } from "react-router-dom";
function Video() {
    const params = useParams();
    const id = params.id
    const [fetching,setFetching] = useState([])
    useEffect(() => {
        fetchData();
      },[]);
      // fetching particular video from the home page by clicking on it
      async function fetchData() {
     const token = localStorage.getItem("accessToken");
        const res = await fetch(`http://localhost:3000/videos/${id}`,{
          method:"GET",
              headers: {
                'Content-Type': 'application/json',
                authorisation:`JWT ${token}`
              },
        });
        const data = await res.json();
        setFetching(data)
      }
    return (
        <>
        {/* defining playvideo page and header of playvideo page */}
           <div className="video" >
             <div className="video-header" >
                <Header/>
             </div>
              <PlayVideo fetching={fetching} />
           </div>
        </>
    )
}
export default Video;
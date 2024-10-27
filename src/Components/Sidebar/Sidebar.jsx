import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faFilm,faCameraRetro,faClockRotateLeft,faFileVideo,faClock,faThumbsUp,
    faFireFlameCurved,faBagShopping,faMusic,faClapperboard,faSatelliteDish,faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
       <section className="sidebar" >
        {/* icons from awesome for sidebar navigation */}
       <div>
           <div  ><Link to="/" ><span className="home-icon"><FontAwesomeIcon icon={faHouse} /><p>Home</p></span></Link></div>
           <div><FontAwesomeIcon icon={faCameraRetro} /><p>Shorts</p> </div>
           <div><FontAwesomeIcon icon={faFilm} /> <p>Subscriptions</p> </div>
       </div>
       <div>
        {/* user details of serach/watch history */}
           <h3>You </h3>
           <div><FontAwesomeIcon icon={faClockRotateLeft}/><p>History</p> </div>
           <div><FontAwesomeIcon icon={faFileVideo} /> <p>Playlist</p></div>
           <div><FontAwesomeIcon icon={faClock} /><p>Watch History</p> </div>
           <div><FontAwesomeIcon icon={faThumbsUp} /><p>Liked Videos</p></div>
       </div>
       <div>
        {/* suggested icons for more information */}
           <h3>Explore</h3>
           <div><FontAwesomeIcon icon={faFireFlameCurved} /><p>Trending</p></div>
           <div><FontAwesomeIcon icon={faBagShopping} /><p>Shopping</p></div>
           <div><FontAwesomeIcon icon={faMusic} /><p>Music</p></div>
           <div><FontAwesomeIcon icon={faClapperboard} /><p>Movies</p></div>
           <div><FontAwesomeIcon icon={faSatelliteDish} /><p>Live</p></div>
           <div><FontAwesomeIcon icon={faGamepad} /><p>Gaming</p></div>
       </div>
      </section>
    </>
  );
}
export default Sidebar;

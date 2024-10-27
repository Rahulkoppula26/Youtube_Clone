import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMagnifyingGlass,faMicrophone,faVideo,faBell,faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import Sidebar from "../Sidebar/Sidebar";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [isVisible,setIsVisible]=useState(true);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState([]);
  
  useEffect(() => {
    fetchData();
   },[]);
  //  fetching data from the routes using token verification
   async function fetchData() {
     const token = localStorage.getItem("accessToken");
     const res = await fetch("http://localhost:3000/videos",{
       method:"GET",
           headers: {
             'Content-Type': 'application/json',
             authorisation:`JWT ${token}`
           },
     })
     const data = await res.json();
     setSearch(data);

   } 
   // function to target the value of input from the user
   function updateSearch(e) {
  
      setSearchText(e.target.value);
     filteredVideos(e.target.value);
   }
   // converting to lowercase and filtering the matched data from searchtext by user
   function filteredVideos(searchText) {
     const filtered = search.filter((video) =>
       video.title.toLowerCase().includes(searchText.toLowerCase())
    );
     props.filterFunction(filtered);
   }
 
  return (
    <>
       <div className="header" >
       {/* creating logo and hamberger icon */}
           <div className="logo">
            <button className="burger" onClick={()=>setIsVisible(isVisible?false :true)} type="button"><FontAwesomeIcon icon={faBars} /></button>
             <Link to="/">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
                    alt="Youtube_Logo"
                    width="80px"
                    height="50px"
                  />
             </Link>
           </div>
           {/* creating search bar  */}
           <div className="search-bar">
             <div className="search">
               <input type="text" className="search-input" placeholder="Search"  id="search" name="search" onChange={updateSearch} />
               <button type="button" className="search-icon-btn" onClick={()=>filteredVideos(searchText)} ><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" /></button>
            </div>
            <FontAwesomeIcon icon={faMicrophone} className="mic-icon" />
           </div>
           {/* user logo and channel creation button */}
              <div>
                  <Link to="/signin">
                   <button className="signin-btn" type="button">
                     <FontAwesomeIcon className ="signin-icon" icon={faCircleUser } />
                     SignIn
                   </button>
                 </Link>
                 </div>
           <div className="create" >
               <FontAwesomeIcon icon={faVideo} className="video-icon" />
               <FontAwesomeIcon icon={faBell} className="notification-icon" />
                 <div className="user-logo" >
                 <Link to="/newaccount" ><FontAwesomeIcon icon={faCircleUser } className="user-icon" /></Link>
                 </div>
              
           </div>
       </div>
       {/* sidebar for youtube to navigate */}
       <div className="">
       {isVisible && 
          <Sidebar isVisible={isVisible} />
       }
        </div>
     

    </>
  );
}
export default Header;

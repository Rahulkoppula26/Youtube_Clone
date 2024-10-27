import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";

function App() {
  const [filteredVideosAre,setFilteredVideosAre]= useState([])
  function filteringVideos(filtered) {
    setFilteredVideosAre(filtered);
  }
  return (
    <>
      <div className="app">
        <Header filterFunction={filteringVideos}/>
        <Home filteredVideosAre={filteredVideosAre} />
        
      </div>
    </>
  );
}

export default App;

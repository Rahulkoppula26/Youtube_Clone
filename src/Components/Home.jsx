import Body from "../Components/Body/Body";
function Home(props) {
    return (
        <>
    {/* displaying body component */}
        <div style={{display:"flex"}} >
          <Body finalFilteredVideo={props.filteredVideosAre} />
        </div>
    
        </>
    )
}
export default Home;
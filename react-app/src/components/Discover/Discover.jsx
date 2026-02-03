import SearchBar from "./SearchBar"
import TopDisBar from "./TopDisBar"
import MainMovieDiv from "./MainMovieDiv"
import './discover.css'
import SideBar from "../Home/SideBar"


export default function Discover(){
    return(
        <>
        <div id="discoverContainer">
            <SideBar></SideBar>
            <div id="discovermain">
                <TopDisBar></TopDisBar>    
                <SearchBar></SearchBar>
                <MainMovieDiv></MainMovieDiv>
            </div>    
        </div>       
        </>
    )
}
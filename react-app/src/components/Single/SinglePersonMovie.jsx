import { useRef } from "react";
import SingleMovieBottom from "./SingleMovieBottom";
import SingleMovieTop from "./SingleMovieTop";
import VideoControls from "./VideoControls";
import "./singleMovie.css";


export default function SinglePersonMovie(){
    const videoRef=useRef(null);
    return(
        <div id="singleMoviePage">
               <video id="bg-video" ref={videoRef} autoPlay muted loop>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source>
            </video>
            <div id="content_single">
            <SingleMovieTop movieName={"hello"}></SingleMovieTop>
            <div>

            <VideoControls reference={videoRef}></VideoControls>
            <SingleMovieBottom></SingleMovieBottom>
            </div>
            </div>       
        </div>
    )
}
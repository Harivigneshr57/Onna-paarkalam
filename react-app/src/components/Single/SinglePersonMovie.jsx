import { useRef } from "react";
import SingleMovieBottom from "./SingleMovieBottom";
import SingleMovieTop from "./SingleMovieTop";
import VideoControls from "./VideoControls";
import "./singleMovie.css";
import wheels from "./Wheels on the Bus.mp4";



export default function SinglePersonMovie() {
    const videoRef = useRef(null);
    let vdoSrc="";
    return (
        // <SampleSingle></SampleSingle>
        <div id="singleMoviePage">
               <video id="bg-video" ref={videoRef} autoPlay muted >
                <source src={vdoSrc?vdoSrc:wheels}></source>
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
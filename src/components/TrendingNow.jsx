import TrendingContainer from "./TrendingMovieContainer";
import movie1 from "../assets/Tmovie1.png";
import movie2 from "../assets/Tmovie2.png";
import movie3 from "../assets/Tmovie3.png";
import movie4 from "../assets/Tmovie4.png";
import movie5 from "../assets/Tmovie5.png";


export default function TrendingNow(){
    let trendingMovies = [movie1, movie2, movie3, movie4, movie5];
    return(
        <>
            <div className="trending flex">
                <div className="trendingNow">
                    <h2>Trending Now</h2>
                    <div className="trendingMovieList">
                        {trendingMovies.map((a,i)=>{
                            return (<TrendingContainer key={i} src={a}></TrendingContainer>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
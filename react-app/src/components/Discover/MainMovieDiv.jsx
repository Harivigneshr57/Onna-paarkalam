import MovieDiv from "./MovieDiv";
export default function MainMovieDiv(){
    let movieCategory=["Comedy Movies","Thriller Movies","Family Movies"];
return(
    <>
    {movieCategory.map((movie,index)=>(
        <div id="catMovie">
            <h1 className="movieCat">{movie}</h1>
            <div id="movieitems">
                <MovieDiv key={index} moviecat={movie}></MovieDiv>
            </div>
        </div>
    ))}   
    </>
)
}
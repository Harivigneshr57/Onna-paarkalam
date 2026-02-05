import MovieCard from "../Discover/MovieCard";

export default function SingleMovieBottom(){
    let movieArr=[ { image :"https://a.ltrbxd.com/resized/film-poster/4/3/0/8/5/43085-michael-madana-kama-rajan-0-230-0-345-crop.jpg?v=58cac318df",title:"Michael Madana Kama Rajan", year:1990, genre:"Comedy" },
    { image:"https://i.pinimg.com/736x/e0/48/5d/e0485d85b9aba5ca89529a57eaca62c2.jpg",title:"Panchathanthiram", year:2002, genre:"Comedy" },
    { image:"https://i.pinimg.com/736x/9b/b8/83/9bb883f53f1c39add4520c301a3e31c0.jpg",title:"Avvai Shanmugi", year:1997, genre:"Comedy" },
    { image:"https://m.media-amazon.com/images/M/MV5BYzRmMTc4YTQtNjY1MC00MDg1LThlMWEtNmRiNzIwNDY4MWRkXkEyXkFqcGc@._V1_.jpg",title:"Thenali", year:2000, genre:"Comedy" },
    { image:"https://m.media-amazon.com/images/M/MV5BNWJhZjY0ZDYtMGFkZC00MWYxLTkyMzktYmZmNmRjYTI4ZTQyXkEyXkFqcGc@._V1_.jpg",title:"Kaadhala Kaadhala", year:1998, genre:"Comedy" },
    { image :"https://a.ltrbxd.com/resized/film-poster/4/3/0/8/5/43085-michael-madana-kama-rajan-0-230-0-345-crop.jpg?v=58cac318df",title:"Michael Madana Kama Rajan", year:1990, genre:"Comedy" },
  { image:"https://i.pinimg.com/736x/e0/48/5d/e0485d85b9aba5ca89529a57eaca62c2.jpg",title:"Panchathanthiram", year:2002, genre:"Comedy" },
  { image:"https://i.pinimg.com/736x/9b/b8/83/9bb883f53f1c39add4520c301a3e31c0.jpg",title:"Avvai Shanmugi", year:1997, genre:"Comedy" },
  { image:"https://m.media-amazon.com/images/M/MV5BYzRmMTc4YTQtNjY1MC00MDg1LThlMWEtNmRiNzIwNDY4MWRkXkEyXkFqcGc@._V1_.jpg",title:"Thenali", year:2000, genre:"Comedy" },
  { image:"https://m.media-amazon.com/images/M/MV5BNWJhZjY0ZDYtMGFkZC00MWYxLTkyMzktYmZmNmRjYTI4ZTQyXkEyXkFqcGc@._V1_.jpg",title:"Kaadhala Kaadhala", year:1998, genre:"Comedy" }
 ]
    return(
        <div id="singleBottomDiv" >
            {
      movieArr.map((movieobj,index)=>(
        <MovieCard key={movieobj.id} movie={movieobj}></MovieCard>
      ))
    }
        </div>
    )
}
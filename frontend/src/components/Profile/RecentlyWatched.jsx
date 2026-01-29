import MovieCard from "./MovieCard";

const movies = [
  { title: "The Shawshank", year: 1994, genre: "Drama", progress: 100 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", progress: 65 },
  { title: "The Dark Knight", year: 2008, genre: "Action", progress: 80 },
  { title: "Inception", year: 2010, genre: "Thriller", progress: 90 },
  { title: "Parasite", year: 2019, genre: "Thriller", progress: 70 },
];

export default function RecentlyWatched() {
  return (
    <section className="recent">
      <h2>Recently Watched</h2>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </section>
  );
}

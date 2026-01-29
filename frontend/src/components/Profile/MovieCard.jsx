export default function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <div className="poster" />
  
        <div className="movie-meta">
          <h4>{movie.title}</h4>
          <span>{movie.genre} · {movie.year}</span>
  
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${movie.progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }
  
import MovieCard from "./MovieCard";

export default function Results({ movies }) {
  return (
    <div className="flex">
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

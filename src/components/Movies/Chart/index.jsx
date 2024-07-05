import Card from "./Card";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Chart() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
  );
  const data = await response.json();
  let movies = data.results;
  // 인기도 내림차순
  movies = movies.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="sm:grid sm:grid-cols-4 lg:gird-cols-5 xl:grid-cols-5 2xl:grid-cols-5 max-w-6xl gap-9 mt-6">
      {movies &&
        movies.map((movie, index) => (
          <Card key={movie.id} movie={movie} index={index} />
        ))}
    </div>
  );
}

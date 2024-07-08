import Card from "./Card";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Chart() {
  let movies = [];

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    movies = data.results || [];
  } catch (error) {
    console.error(error);
  }

  // 인기도 내림차순
  movies = movies.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="sm:grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-9 mt-6">
      {movies.length > 0 &&
        movies.map((movie, index) => (
          <Card key={movie.id} movie={movie} index={index} />
        ))}
    </div>
  );
}

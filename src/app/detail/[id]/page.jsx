import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function DetailPage({ params }) {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&page=1`,
    { next: { revalidate: 10000 } }
  );
  const movie = await response.json();

  return (
    <div className="container mx-auto pb-10">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }
          }`}
            alt={movie.title || movie.name}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
          />
        </div>

        <div className="mt-4 md:mt-0 md:ml-5">
          <div className="relative">
            <h2 className="text-lg font-bold ">{movie.title || movie.name}</h2>
            <span className="text-sm">{movie.original_title}</span>
          </div>
          <div className="border-t pt-3 mt-3">
            <p className="mb-3 text-md">{movie.overview}</p>
            <p className="mb-1 text-sm">
              <span className="font-semibold mr-1">장르: </span>
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold mr-1">개봉: </span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold mr-1">평점: </span>
              {movie.vote_count}
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold mr-1">상영시간: </span>
              {movie.runtime}분
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

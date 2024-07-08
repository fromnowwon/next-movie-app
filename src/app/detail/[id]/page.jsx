import Image from "next/image";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function DetailPage({ params }) {
  const movieId = params.id;
  let movie = {};

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    movie = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="container mx-auto pb-10">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        영화 정보
      </h2>
      <div className="flex flex-col items-center md:flex-row md:items-start mt-6">
        <div className="flex-shrink-0 w-[300px] h-[500px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }
          }`}
            alt={movie.title || movie.name}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
            width={300}
            height={500}
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </div>

        <div className="mt-4 md:mt-0 md:ml-5">
          <div>
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
          <div className="mt-5">
            <Link
              href={`/ticket/${movie.id}`}
              className="p-3 bg-primary text-white hover:bg-primary-dark transition-colors duration-100"
            >
              예매하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Card({ movie, index }) {
  console.log(movie);
  return (
    <div className="flex flex-col">
      <h3>No. {index + 1}</h3>
      <Image
        src={`https://image.tmdb.org/t/p/original${
          movie.poster_path || movie.backdrop_path
        }
        }`}
        alt={movie.title || movie.name}
        width={170}
        height={234}
        className=""
      ></Image>
      <h2>{movie.title}</h2>
      <p>평점: {movie.vote_average.toFixed(1)}</p>
      <p>{movie.release_date} 개봉</p>
    </div>
  );
}

import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <div>
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
      <div className="p-2">
        <h2>{movie.title || movie.name}</h2>
      </div>
    </div>
  );
}

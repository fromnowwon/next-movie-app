import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ movie }) {
  return (
    <div className="group w-[170px] cursor-pointer sm:hover:shadow-slate-300 sm:shadow-md rounded-lg sm:border sm:border-slate-200 transition-shadow duration-200">
      <Link href={`detail/${movie.id}`}>
        <div className="relative w-full h-[234px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              movie.poster_path || movie.backdrop_path
            }
          }`}
            alt={movie.title || movie.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          ></Image>
        </div>
        <div className="w-full p-2">
          <h2 className="text-md font-bold truncate">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            <span className="text-sm">
              {movie.release_date || movie.first_air_date}
            </span>
            <FiThumbsUp className="h-5 mr-1 ml-3 size-3" />
            <span className="text-sm">{movie.vote_count}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

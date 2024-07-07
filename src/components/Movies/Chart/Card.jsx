import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ movie, index }) {
  return (
    <div>
      <p className="bg-primary text-xl text-white text-center font-semibold">
        No.{index + 1}
      </p>
      <div className="group w-[100%] cursor-pointer sm:shadow-md transition-shadow duration-200 mt-1">
        <Link href={`detail/${movie.id}`}>
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie.poster_path || movie.backdrop_path
              }
            }`}
              alt={movie.title || movie.name}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
            ></Image>
          </div>
          <div className="w-full p-2">
            <h2 className="text-md font-bold truncate">
              {movie.title || movie.name}
            </h2>
            <p className="flex items-center">
              <span className="text-sm">
                {movie.release_date || movie.first_air_date} 개봉
              </span>
              <FiThumbsUp className="h-5 mr-1 ml-3 size-3" />
              <span className="text-sm">{movie.vote_count}</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

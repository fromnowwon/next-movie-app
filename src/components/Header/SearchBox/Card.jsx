import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-300 sm:shadow-md sm:border sm:border-slate-200 transition-shadow duration-200">
      <Link href={`/detail/${result.id}`}>
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }}`}
            width={300}
            height={500}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
            className="absolute inset-0 w-full h-full object-cover"
          ></Image>
        </div>
        <div className="p-3">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate mt-1">
            {result.title || result.name}
          </h2>
          <p className="flex items-center mt-1">
            <span className="text-sm">
              {result.release_date || result.first_air_date} 개봉
            </span>
            <span className="flex items-center text-sm">
              <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

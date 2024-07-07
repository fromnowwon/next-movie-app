import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Ticket({ params }) {
  const movieId = params.id;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR&page=1`,
    { next: { revalidate: 10000 } }
  );
  const movie = await response.json();
  console.log(movie);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        {movie.title || movie.name} 예매하기
      </h2>
      <Image
        src="/dummy_ticket-page.png"
        width={1000}
        height={500}
        alt={movie.title || movie.name}
        className="mt-6 pb-10"
      />
    </div>
  );
}

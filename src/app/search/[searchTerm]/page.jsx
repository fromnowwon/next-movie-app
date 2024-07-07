import SearchResults from "@components/Header/SearchBox/SearchResults";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=ko-KR&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        검색 결과
      </h2>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <SearchResults results={results} />}
    </div>
  );
}

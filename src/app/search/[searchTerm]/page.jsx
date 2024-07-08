import SearchResults from "@components/Header/SearchBox/SearchResults";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  let results = [];

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=ko-KR&page=1&include_adult=false`,
      { next: { revalidate: 10000 } }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    results = data.results;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl pb-5 border-b-2 border-b-black dark:border-b-white">
        검색 결과
      </h2>
      {results && results.length === 0 && (
        <h1 className="text-center mt-6">검색 결과가 없습니다.</h1>
      )}
      {results && <SearchResults results={results} />}
    </div>
  );
}

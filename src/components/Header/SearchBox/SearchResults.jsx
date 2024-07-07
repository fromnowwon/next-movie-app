import Card from "./Card";

export default function SearchResults({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-9 py-4">
      {results.map((result) => (
        <div key={result.id}>
          <Card result={result} />
        </div>
      ))}
    </div>
  );
}

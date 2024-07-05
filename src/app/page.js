import TopRated from "@components/Main/TopRated";
import Trending from "@components/Main/Trending";

export default function Home() {
  return (
    <main>
      <div className="max-w-[980px] mx-auto">
        <TopRated />
        <Trending />
      </div>
    </main>
  );
}

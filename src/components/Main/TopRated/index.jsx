"use client";
import Tabs from "../common/Tabs";
import Results from "../common/Results";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

const tabData = [
  {
    id: 1,
    title: "무비차트",
    category: "popular",
  },
  {
    id: 2,
    title: "상영예정작",
    category: "upcoming",
  },
];

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetchMovie(tabData[activeTab].category);
  }, [activeTab]);

  const fetchMovie = async (category) => {
    try {
      const response = await fetch(
        `${BASE_URL}${category}?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const movies = data.results;

      // 인기도 내림차순
      if (category === "popular") {
        movies.sort((a, b) => b.popularity - a.popularity);
      }
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <section>
      <Tabs tabData={tabData} onSelect={handleSelect} />
      <Results movies={movies} />
    </section>
  );
}

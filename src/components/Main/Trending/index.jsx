"use client";
import Tabs from "../common/Tabs";
import Results from "../common/Results";
import { useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/trending/movie/`;

const tabData = [
  {
    id: 1,
    title: "일간인기",
    category: "day",
  },
  {
    id: 2,
    title: "주간인기",
    category: "week",
  },
];

export default function Trending() {
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
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="p-3 mt-5">
      <Tabs tabData={tabData} onSelect={handleSelect} />
      <Results movies={movies} />
    </section>
  );
}

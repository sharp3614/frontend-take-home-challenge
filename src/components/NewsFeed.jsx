import React, { useState } from "react";
import Article from "./Article";
import { useGetNewsQuery } from "../services/newsapi";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [searchTerm, setSearchTerm] = useState("all");
  const { data, error, isLoading } = useGetNewsQuery(searchTerm);
  const handleSearch = (term) => {
    if (term) setSearchTerm(term);
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && error ? (
        <div className="bg-red-200 p-2 w-full rounded">Error: {error}</div>
      ) : null}
      {!isLoading && data.articles.length
        ? data.articles.map((item, index) => (
            <Link key={index} to={`${item.url}`}>
              <Article article={item} />
            </Link>
          ))
        : null}
    </div>
  );
};

export default NewsFeed;

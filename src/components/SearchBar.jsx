import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center mb-4">
      <form onSubmit={handleSearch} className="w-full md:w-1/2 flex">
        <input
          type="text"
          placeholder="Search articles..."
          className=" w-full p-2 shadow-md border outline-none rounded-l"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-600 text-white p-2 rounded-r"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

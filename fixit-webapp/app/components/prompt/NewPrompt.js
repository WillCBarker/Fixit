"use client";

import PromptResults from './PromptResults';
import React, {useState} from "react";

export function NewPrompt({ onSearch}) {
  // Keeps track of current state of values
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState('');

  // Pass input query and location back to home page
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, location);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded bg-white flex flex-col items-center">
      <div className="relative flex p-2 items-center border rounded-3xl shadow-md">
        <input
          type="text"
          value={query}
          placeholder="Enter problem"
          className="flex-1 p-2 focus:outline-none sm:w-48 md:w-64 lg:w-96 xl:w-128"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="border-l h-9 mx-4"></span>
        <input
          type="text"
          value={location}
          placeholder="Enter location"
          className="flex-1 p-2 focus:outline-none sm:w-48 md:w-64 lg:w-96 xl:w-128"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 ml-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 flex items-center rounded-full"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default NewPrompt;
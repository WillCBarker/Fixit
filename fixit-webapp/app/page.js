"use client";
import { NewPrompt } from "./components/prompt/NewPrompt";
import PromptResults from "./components/prompt/PromptResults"; // Import PromptResults
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  // Update search bar values upon submission of NewPrompt form
  const handleSearch = (query, location) => {
    setSearchQuery(query);
    setLocation(location);
    setSearchClicked(true);

  };
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <h1 className="mb-10 text-8xl font-bold border-b-2 border-fixit-green">FixitLink</h1>
      <NewPrompt onSearch={handleSearch} />
      <PromptResults searchQuery={searchQuery} location={location} searchClicked={searchClicked}/>
    </main>
  );
}

"use client";
import { NewPrompt } from "./components/prompt/NewPrompt";
import PromptResults from "./components/prompt/PromptResults"; // Import PromptResults
import { useState } from "react";

export default function Home() {
  const [promptResults, setPromptResults] = useState(null);

  const handleResults = (data) => {
    setPromptResults(data);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      {promptResults ? (
        // Render layout after PromptResults displays data
        <div className="w-full mt-4 flex flex-col items-center">
          <PromptResults responseData={promptResults} />
        </div>
      ) : (
        // Render NewPrompt when data is not yet available
        <>
            <h1 className="mb-4 text-8xl mb-20 font-bold">FixitLink</h1>
            <NewPrompt onResults={handleResults} />
        </>
      )}
    </main>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import PromptResults from "./PromptResults";

export function NewPrompt({ initialPrompt = "" }) {
  const [responseData, setResponseData] = useState(null);
  const promptInputRef = useRef();
  const locationInputRef = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const enteredPrompt = promptInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;

    try {
      const response = await fetch(`/api/prompts?prompt=${encodeURIComponent(enteredPrompt)}&location=${encodeURIComponent(enteredLocation)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Updates using response here
    console.log("Received data:", responseData);
  }, [responseData]);

  return (
    <form onSubmit={submitFormHandler} className="rounded bg-white flex flex-col items-center">
      <div className="relative flex p-2 items-center border rounded-3xl shadow-md">
        <input
          type="text"
          id="prompt"
          placeholder="Enter problem"
          className="flex-1 p-2 focus:outline-none sm:w-48 md:w-64 lg:w-96 xl:w-128"
          ref={promptInputRef}
        />
        <span className="border-l h-9 mx-4"></span>
        <input
          type="text"
          id="location"
          placeholder="Enter location"
          className="flex-1 p-2 focus:outline-none sm:w-48 md:w-64 lg:w-96 xl:w-128"
          ref={locationInputRef}
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
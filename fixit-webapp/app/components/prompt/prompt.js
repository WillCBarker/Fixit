"use client";

import React, { useState } from "react";

export function NewPrompt({ initialPrompt = "" }) {
  const [inputValue, setInputValue] = useState(initialPrompt);
  const [enteredPrompt, setEnteredPrompt] = useState(initialPrompt);

  const changeInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredPrompt(inputValue);
    console.log("Submitted prompt:", inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Fixit</h1>
      <p className="text-lg font-semibold mb-4">Enter your problem below:</p>
      <form onSubmit={submitHandler} className="flex flex-col items-center">
        <label htmlFor="prompt" className="sr-only">
          Enter your problem
        </label>
        <div className="flex items-center mb-4">
          <input
            type="text"
            id="prompt"
            value={inputValue}
            onChange={changeInputHandler}
            required
            className="outline outline-2 outline-offset-2 outline-stone-300 h-16 w-96 pr-8 pl-5 focus:shadow rounded-2xl"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-16 py-2 px-4 ml-2 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-lg font-semibold mt-4">{enteredPrompt}</p>
    </div>
  );
}

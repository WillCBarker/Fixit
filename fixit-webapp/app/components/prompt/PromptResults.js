// PromptResults.js

import React from "react";

const PromptResults = ({ responseData }) => {
  console.log("promptresults", responseData);

  return (
    <div className="w-full mt-4 flex flex-col items-center">
      {responseData && responseData.objects && responseData.objects.length > 0 && (
        <ul className="w-3/4 rounded bg-white p-4 border">
          {responseData.objects.map((object) => (
            <li key={object.id} className="mb-2">
              <strong>ID:</strong> {object.id}, <strong>Name:</strong> {object.name}, <strong>Value:</strong> {object.value}, <strong>Description:</strong> {object.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PromptResults;



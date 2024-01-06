import React, { useEffect, useState } from 'react';

function Results({ searchQuery, location, searchClicked }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchClicked) {
      const fetchData = async () => {

        // Debug messaging
        console.log(searchQuery, location)

        // Send out GET request for prompt
        try {
            const response = await fetch(`/api/diagnose_prompt?prompt=${searchQuery}&location=${location}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            });

            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            
            // Updates state of data once reponse is received from endpoint
            const data = await response.json();
            console.log("DATA RECEIVED: ", data)
            setResults(data);
            
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
      };

      fetchData();
    }
  }, [searchQuery]);

  if (!searchClicked) {
    return null;
  }

  return (
    <div className="w-full mt-4 flex flex-col items-center">
      {results && (
        <ul className="w-3/4 rounded bg-white p-4 border">
          <li className="mb-2">
            <strong>Trade:</strong> {results}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Results;



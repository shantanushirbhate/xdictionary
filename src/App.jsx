import React, { useState } from "react";
import "./App.css";

function XDictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>XDictionary</h1>

        <div className="searchBox">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search a word..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        {result && result !== "Word not found in the dictionary." && (
          <div className="result">
            <h3>Definition:</h3>
            <p>{result}</p>
          </div>
        )}

        {result === "Word not found in the dictionary." && (
          <p className="error">Word not found in the dictionary.</p>
        )}
      </div>
    </div>
  );
}

export default XDictionary;
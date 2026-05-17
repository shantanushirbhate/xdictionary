import React, { useState } from "react";
import "./App.css"

function DictionaryApp() {
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
    <div>
      <h1>Dictionary App</h1>

      <input
        type="text"
        value={searchTerm}
        placeholder="Enter word"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {/* ALWAYS SHOW THIS */}
      <div>
        <h3>Definition:</h3>

        {result && result !== "Word not found in the dictionary." ? (
          <p>{result}</p>
        ) : result === "Word not found in the dictionary." ? (
          <p>Word not found in the dictionary.</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default DictionaryApp;
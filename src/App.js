// App.js or your main component file
import React, { useState, useEffect } from 'react';
import Info from './info';
import './app.css'; // Ensure you have an App.css file in your project's src directory

function App() {
  const [search, setSearch] = useState('');
  const lang = 'arm';
  const wholeword = false;
  const [words, setWords] = useState([]);
  const [matching, setMatching] = useState([]);
  const [error, setError] = useState(null);
  const [maxMatches, setMaxMatches] = useState(130);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(`/dicts/${lang}.txt`);
        const text = await response.text();
        setWords(text.split('\n'));
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    fetchWords();
  }, [lang]);

  useEffect(() => {
    const makeRegex = () => {
      try {
        const pattern = wholeword ? `^${search}$` : search;
        const regex = new RegExp(pattern);
        setError(null);
        return regex;
      } catch (e) {
        setError(e);
        return null;
      }
    };

    const regex = makeRegex();
    if (!regex) return;

    const matchedWords = words.filter(word => regex.test(word)).slice(0, maxMatches);
    setMatching(matchedWords);
  }, [search, wholeword, words, maxMatches]);

  useEffect(() => {
    const params = new URLSearchParams({ lang, search, wholeword: wholeword ? "on" : "" });
    window.history.replaceState(null, "", "?" + params.toString());
  }, [search, lang, wholeword]);

  return (
    <div className="container">
      <Info/>
      <h1 className="title">RegEx-Հանգաբառարան</h1>
      <form className="search-form">
        <input
          className="search-input"
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Բառերի որոնում"
        />
        {/* ... (rest of your form) */}
      </form>
      {error ? (
        <p className="error">{error.message}</p>
      ) : (
        <ul className="word-grid">
          {matching.map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      )}
      <div id="max_matches_config">
        Ցույց տալ առավելագույնը 
        <input
          type="number"
          min="1"
          max="10000"
          value={maxMatches}
          onChange={e => setMaxMatches(e.target.value)}
        />
        արդյունք:
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setResults(data.items);
      console.log('data.items', data.items)
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  return (
    <div className="app">
      <SearchInput onSearch={handleSearch} />
      <ReposList  repos={results} />
    </div>
  );
}

export default App;
import './App.css';
import React, { useState } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';

function App() {
  const [results, setResults] = useState([]);

  const URL = 'https://api.github.com/search/repositories?q=';
  const REPOS_AMOUNT = '&per_page=20';

  const handleSearch = (query) => {
    // fetch(`https://api.github.com/search/repositories?q=${query}&per_page=20`)
    fetch(`${URL}${query}${REPOS_AMOUNT}`)
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
import './App.css';
import React, { useState } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';

function App() {
  const DUMMY_REPOS = [
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      id: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      id: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      id: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
  ];



  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // axios.get(`https://api.github.com/search/repositories?q=${query}`)
    //   .then((response) => {
    //     setResults(response.data.items);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });


    console.log(results);


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
      {/* <ReposList  repos={DUMMY_REPOS} /> */}
      <ReposList  repos={results} />
    </div>
  );
}

export default App;
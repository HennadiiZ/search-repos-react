import './App.css';
// import React, { useRef } from 'react';
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

  // const contentInputRef = useRef(null);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="app">
      {/* <form className='form' onSubmit={submitHandler}>
        <input id='text' type='text' placeholder='Search' ref={contentInputRef}/>
      </form> */}
      <SearchInput />
      <ReposList  repos={DUMMY_REPOS} />
    </div>
  );
}

export default App;

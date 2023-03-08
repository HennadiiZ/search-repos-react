import './App.css';
import React from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';

import { useContext } from 'react';
import DataContext from './_store/data-context'; 

function App() {
  const reposCtx = useContext(DataContext);

  return (
    <div className="app">
      <SearchInput />
      <ReposList  repos={reposCtx.repos} />
    </div>
  );
}

export default App;
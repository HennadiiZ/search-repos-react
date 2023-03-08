import './App.css';
import React, { useState } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';
import Pagination from './UI/Pagination/Pagination';

import { useContext } from 'react';
import DataContext from './_store/data-context'; 

function App() {
  const reposCtx = useContext(DataContext);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const SHOW_ITEMS_PER_PAGE = 3;

  const renderItems = (currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return reposCtx.repos.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedItems = renderItems(currentPage, SHOW_ITEMS_PER_PAGE);
  //

  return (
    <div className="app">
      {/* <SearchInput />
      <ReposList  repos={reposCtx.repos} />
      <Pagination /> */}

      <SearchInput />
      <ReposList  repos={displayedItems} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={SHOW_ITEMS_PER_PAGE}
        totalItems={reposCtx.repos.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
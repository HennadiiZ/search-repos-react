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
    // return reposCtx.repos.slice(startIndex, endIndex);
    return reposCtx.filteredRepos.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedItems = renderItems(currentPage, SHOW_ITEMS_PER_PAGE);

  let reposList = null;
  if (reposCtx.loading) {
    reposList = <div className='msg_wrapper'><p>Loading...</p></div>;
  } else if (reposCtx.filteredRepos.length > 0) {
    reposList = <ReposList repos={displayedItems} />;
  } else {
    reposList = <div className='msg_wrapper'><p>No data found.</p></div>;
  }

  return (
    <div className="app">
      <SearchInput onSearch={reposCtx.findRepo}/>
      {reposList}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={SHOW_ITEMS_PER_PAGE}
        totalItems={reposCtx.filteredRepos.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
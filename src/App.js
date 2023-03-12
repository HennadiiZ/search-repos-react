import './App.css';
import React, { useState, useEffect } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';
import Pagination from './UI/Pagination/Pagination';
import { fetchRepos, reposSlice} from './_store/data-context'; 
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './UI/Spinner/Spinner';

function App() {
  const repos = useSelector((state) => state.repos);
  const filteredRepos = useSelector((state) => state.filteredRepos);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos('react'));
  }, [dispatch]);
 
  // ----------------------------------------------------- pagination
  const [currentPage, setCurrentPage] = useState(1);
  const SHOW_ITEMS_PER_PAGE = 3;

  const renderItems = (currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredRepos.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayedItems = renderItems(currentPage, SHOW_ITEMS_PER_PAGE);
  // ----------------------------------------------------- pagination

  const findRepoHandler = (query) => {
    const filteredData = repos.filter((item) =>
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(reposSlice.actions.setFilteredRepos(filteredData));
  };


  let reposList = null;
  
  if (isLoading) {
    // reposList = <div className='msg_wrapper'><p>Loading...</p></div>;
    reposList = <div className='msg_wrapper'><p><Spinner /></p></div>;
  } else if (filteredRepos.length > 0) {
    reposList = <ReposList repos={displayedItems} />;
  } else {
    reposList = <div className='msg_wrapper'><p>No data found.</p></div>;
  }

  return (
    <div className="app">
      <SearchInput onSearch={findRepoHandler}/>
      {reposList}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={SHOW_ITEMS_PER_PAGE}
        totalItems={filteredRepos.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;











// import './App.css';
// import React, { useState } from 'react';
// import ReposList from './components/ReposList/ReposList';
// import SearchInput from './UI/SearchInput/SearchInput';
// import Pagination from './UI/Pagination/Pagination';

// import { useContext } from 'react';
// import DataContext from './_store/data-context'; 

// function App() {
//   const reposCtx = useContext(DataContext);

//   // pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const SHOW_ITEMS_PER_PAGE = 3;

//   const renderItems = (currentPage, itemsPerPage) => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     // return reposCtx.repos.slice(startIndex, endIndex);
//     return reposCtx.filteredRepos.slice(startIndex, endIndex);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const displayedItems = renderItems(currentPage, SHOW_ITEMS_PER_PAGE);

//   let reposList = null;
//   if (reposCtx.loading) {
//     reposList = <div className='msg_wrapper'><p>Loading...</p></div>;
//   } else if (reposCtx.filteredRepos.length > 0) {
//     reposList = <ReposList repos={displayedItems} />;
//   } else {
//     reposList = <div className='msg_wrapper'><p>No data found.</p></div>;
//   }

//   return (
//     <div className="app">
//       <SearchInput onSearch={reposCtx.findRepo}/>
//       {reposList}
//       <Pagination
//         currentPage={currentPage}
//         itemsPerPage={SHOW_ITEMS_PER_PAGE}
//         totalItems={reposCtx.filteredRepos.length}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default App;
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

















// ====== orig 2


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



//---------------------------------
// import './App.css';
// import React, { useState } from 'react';
// import ReposList from './components/ReposList/ReposList';
// import SearchInput from './UI/SearchInput/SearchInput';
// import Pagination from './UI/Pagination/Pagination';
// import { useSelector, useDispatch } from 'react-redux';
// import { findRepos } from './_store/reposSlice';

// function App() {
//   const repos = useSelector(state => state.repos.items);
//   const loading = useSelector(state => state.repos.loading);
//   const dispatch = useDispatch();

//   // pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const SHOW_ITEMS_PER_PAGE = 3;

//   const renderItems = (currentPage, itemsPerPage) => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return repos.slice(startIndex, endIndex);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const displayedItems = renderItems(currentPage, SHOW_ITEMS_PER_PAGE);

//   let reposList = null;
//   if (loading) {
//     reposList = <div className='msg_wrapper'><p>Loading...</p></div>;
//   } else if (repos.length > 0) {
//     reposList = <ReposList repos={displayedItems} />;
//   } else {
//     reposList = <div className='msg_wrapper'><p>No data found.</p></div>;
//   }

//   const searchHandler = (query) => {
//     dispatch(findRepos(query));
//   }

//   return (
//     <div className="app">
//       <SearchInput onSearch={searchHandler}/>
//       {reposList}
//       <Pagination
//         currentPage={currentPage}
//         itemsPerPage={SHOW_ITEMS_PER_PAGE}
//         totalItems={repos.length}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default App;













import './App.css';
import React, { useState } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';
import Pagination from './UI/Pagination/Pagination';

import { useContext } from 'react';
import DataContext from './_store/data-context'; 

import { useSelector, useDispatch } from 'react-redux';

// useSelector - this is how I call state
// useDispatch - an obj that has properties I add

function App() {

  //
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter ); // 0
  const counterState = useSelector(state => state ); // {counter: 0} // {counter: 0, repos: Array(0), filteredRepos: Array(0), totalRepos: 0, loading: false}
  const isLoading = useSelector(state => state.loading); // 0

  const incrChange = () => {
    dispatch({type: 'inc', amount: 5});
  };
  const decrChange = () => {
    dispatch({type: 'dec'});
  };
  const toggleChange = () => {
    dispatch({type: 'toggle'});
  };
  //

  console.log('isLoading', isLoading);
  // console.log('counter', counter);
  // console.log('counterState', counterState);

  const reposCtx = useContext(DataContext);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const SHOW_ITEMS_PER_PAGE = 3;

  const renderItems = (currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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
      <div>
        <button onClick={decrChange}>decr</button>
        <button onClick={toggleChange}>TOGGLE</button>
        <button onClick={incrChange}>incr</button>
        <p>{counter}</p>
        <p>{isLoading}</p>
      </div>
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
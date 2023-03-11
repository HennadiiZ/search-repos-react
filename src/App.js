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
import React, { useState, useEffect } from 'react';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';
import Pagination from './UI/Pagination/Pagination';

import { useContext } from 'react';
import DataContext, { reposActions, store, fetchRepos} from './_store/data-context'; 

import { useSelector, useDispatch } from 'react-redux';

// useSelector - this is how I call state
// useDispatch - an obj that has properties I add

function App() {

  // -----------------------------------------------------
  // const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter ); // 0
  // const counterState = useSelector(state => state ); // {counter: 0} // {counter: 0, repos: Array(0), filteredRepos: Array(0), totalRepos: 0, loading: false}
  // const isLoading = useSelector(state => state.loading); // 0

  const counter = useSelector(state => state.counter);

  const repos = useSelector((state) => state.repos);
  const filteredRepos = useSelector((state) => state.filteredRepos);
  const isLoading = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos('react'));
  }, [dispatch]);

  const incrChange = () => {
    // dispatch({type: 'inc', amount: 5}); // reposActions
    dispatch(reposActions.inc());
  };
  const decrChange = () => {
    // dispatch({type: 'dec'});
    dispatch(reposActions.dec());
  };
  const increaceChange = () => {
    // dispatch({type: 'increace', amount: 5}); // reposActions
    dispatch(reposActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };
  const toggleChange = () => {
    // dispatch({type: 'toggle'});
    dispatch(reposActions.toggle());
  };
  // -----------------------------------------------------

 
  console.log('counter', counter);
  // console.log('counterState', counterState);
  console.log('repos', repos);
  console.log('filteredRepos', filteredRepos);
  console.log('isLoading', isLoading);

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
        <button onClick={increaceChange}>increace by 5</button>
        <button onClick={incrChange}>incr</button>
        {/* <p>{counter}</p>
        <p>{isLoading}</p> */}
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
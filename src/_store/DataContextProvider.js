// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRepos, setFilteredRepos } from './reposSlice';
// // import DataContext from './DataContext';

// const DataContextProvider = (props) => {
//   const repos = useSelector((state) => state.repos.repos);
//   const filteredRepos = useSelector((state) => state.repos.filteredRepos);
//   const totalRepos = useSelector((state) => state.repos.totalRepos);
//   const isLoading = useSelector((state) => state.repos.isLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchRepos('react'));
//   }, [dispatch]);

//   const findRepoHandler = (query) => {
//     const filteredData = repos.filter((item) =>
//       item.description.toLowerCase().includes(query.toLowerCase())
//     );

//     dispatch(setFilteredRepos(filteredData));
//   };

//   const context = {
//     repos,
//     filteredRepos,
//     totalRepos,
//     loading: isLoading,
//     findRepo: findRepoHandler,
//   };

//   return <DataContext.Provider value={context}>{props.children}</DataContext.Provider>;
// };

// export default DataContextProvider;



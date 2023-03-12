import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { 
  repos: [], 
  filteredRepos: [], 
  isLoading: false, 
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState: initialState,
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
      state.filteredRepos = action.payload;
    },
    setFilteredRepos: (state, action) => {
      state.filteredRepos = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});


export const reposActions = reposSlice.actions;



const store = configureStore({
  reducer: reposSlice.reducer
});
export default store;



export const fetchRepos = (query) => async (dispatch) => {
  dispatch(reposSlice.actions.setIsLoading(true));

  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=react&per_page=20`
      );
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    dispatch(reposSlice.actions.setRepos(response.data.items));
    dispatch(reposSlice.actions.setFilteredRepos(response.data.items));
   
  } catch (error) {
    console.error('There was a problem with the axios operation:', error);
  } finally {
    dispatch(reposSlice.actions.setIsLoading(false));
  }
};










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DataContext = React.createContext({
//   repos: [],
//   filteredRepos: [],
//   totalRepos: 0,
//   loading: false,
//   findRepo: (query) => {},
// });

// export const DataContextProvider = (props) => {
//   const [repos, setRepos] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const [filteredData, setFilteredData] = useState([]);

//   const URL = 'https://api.github.com/search/repositories?q=';
//   const REPOS_AMOUNT = '&per_page=20';
  
//   useEffect(() => {  
//     setIsLoading(true);  

//     axios.get(`${URL}${'react'}${REPOS_AMOUNT}`)
//     .then((response) => {
//       if (!response.status === 200) {
//         throw new Error('Network response was not ok');
//       }
//       return response.data;
//     })
//     .then((data) => {
//       setRepos(data.items);

//       setFilteredData(data.items);
//       setIsLoading(false);
//     })
//     .catch((error) => {
//       console.error('There was a problem with the axios operation:', error);
//     });

//   }, []);

//   const findRepoHandler = (query) => {
//     const filteredData = repos.filter((item) =>
//       item.description.toLowerCase().includes(query.toLowerCase())
//     );

//     setFilteredData(filteredData);
//   };

//   const context= {
//     repos: repos, 
//     filteredRepos: filteredData,
//     totalRepos: repos.length, 
//     loading: isLoading,
//     findRepo: findRepoHandler,
//   };
      
//   return (
//     <DataContext.Provider value={context}>
//       { props.children }
//     </DataContext.Provider>
//   );
// }

// export default DataContext;
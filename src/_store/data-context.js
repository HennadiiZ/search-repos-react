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



import {createStore} from 'redux';












// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import reposReducer from './reposSlice';
// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRepos, setFilteredRepos } from './reposSlice';



//------------------------------------------------- store.js
// // import { configureStore } from '@reduxjs/toolkit';
// // import reposReducer from './reposSlice';

// const store = configureStore({
//   reducer: {
//     repos: reposReducer,
//   },
// });

// // export default store;
//------------------------------------------------- reposSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   repos: [],
//   filteredRepos: [],
//   totalRepos: 0,
//   isLoading: false,
// };

// const reposSlice = createSlice({
//   name: 'repos',
//   initialState,
//   reducers: {
//     setRepos: (state, action) => {
//       state.repos = action.payload;
//       state.filteredRepos = action.payload;
//       state.totalRepos = action.payload.length;
//     },
//     setIsLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setFilteredRepos: (state, action) => {
//       state.filteredRepos = action.payload;
//     },
//   },
// });

// export const { setRepos, setIsLoading, setFilteredRepos } = reposSlice.actions;

// export const fetchRepos = (query) => async (dispatch) => {
//   dispatch(setIsLoading(true));

//   try {
//     const response = await axios.get(
//       // `https://api.github.com/search/repositories?q=${query}&per_page=20`
//       `https://api.github.com/search/repositories?q=react&per_page=20`
//       );
//     if (response.status !== 200) {
//       throw new Error('Network response was not ok');
//     }

//     dispatch(setRepos(response.data.items));
//     dispatch(setFilteredRepos(response.data.items));
//   } catch (error) {
//     console.error('There was a problem with the axios operation:', error);
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };

// // export default reposSlice.reducer;

//------------------------------------------------- DataContextProvider.js

// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchRepos, setFilteredRepos } from './reposSlice';
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

//   // const context = {
//   //   repos,
//   //   filteredRepos,
//   //   totalRepos,
//   //   loading: isLoading,
//   //   findRepo: findRepoHandler,
//   // };

//   return <DataContext.Provider value={context}>{props.children}</DataContext.Provider>;
// };

// export default DataContextProvider;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = React.createContext({
  repos: [],
  filteredRepos: [],
  totalRepos: 0,
  loading: false,
  findRepo: (query) => {},
});

export const DataContextProvider = (props) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const URL = 'https://api.github.com/search/repositories?q=';
  const REPOS_AMOUNT = '&per_page=20';
  
  useEffect(() => {  
    setIsLoading(true);  

    axios.get(`${URL}${'react'}${REPOS_AMOUNT}`)
    .then((response) => {
      if (!response.status === 200) {
        throw new Error('Network response was not ok');
      }
      return response.data;
    })
    .then((data) => {
      setRepos(data.items);

      setFilteredData(data.items);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('There was a problem with the axios operation:', error);
    });

  }, []);

  const findRepoHandler = (query) => {
    const filteredData = repos.filter((item) =>
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  const context= {
    repos: repos, 
    filteredRepos: filteredData,
    totalRepos: repos.length, 
    loading: isLoading,
    findRepo: findRepoHandler,
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;








//--------------
// const initialState = { 
//   counter: 0, 
//   repos: [], 
//   filteredRepos: [], 
//   totalRepos: 0, 
//   loading: false, 
// };

const initialState = { 
  counter: 0, 
  repos: [], 
  filteredRepos: [], 
  totalRepos: 0, 
  loading: false, 
};

const reposReducer = ( 
  state = initialState, 
  action
  ) => {

  if (action.type === 'inc') {
    return { 
      counter: state.counter + action.amount,
      // repos: state.repos, 
      // filteredRepos: state.filteredRepos, 
      // totalRepos: state.totalRepos, 
      loading: state.loading, 
    }
  }

  if (action.type === 'dec') {
    return { 
      counter: state.counter - 1,
      loading: state.loading, 
    }
  }

  if (action.type === 'toggle') {
    return { 
      counter: state.counter,
      loading: state.loading = !state.loading, 
    }
  }

  if (action.type === 'repos') {
    return { 
      counter: state.counter,
      loading: state.loading, 
    }
  }

  if (action.type === 'filteredRepos') {
    return { 
      counter: state.counter,
      loading: state.loading, 
    }
  }

  return state;
};

export const store = createStore(reposReducer);


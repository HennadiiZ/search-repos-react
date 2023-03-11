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

// export default reposSlice.reducer;
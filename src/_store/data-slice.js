// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchRepos = createAsyncThunk(
//   'data/fetchRepos',
//   async (query) => {
//     const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=20`);
//     return response.data.items;
//   }
// );

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     repos: [],
//     totalRepos: 0,
//     loading: false,
//     filteredRepos: [],
//     error: null,
//   },
//   reducers: {
//     filterRepos(state, action) {
//       const query = action.payload.toLowerCase();
//       state.filteredRepos = state.repos.filter(repo => repo.description.toLowerCase().includes(query));
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRepos.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchRepos.fulfilled, (state, action) => {
//         state.loading = false;
//         state.repos = action.payload;
//         state.totalRepos = action.payload.length;
//       })
//       .addCase(fetchRepos.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { filterRepos } = dataSlice.actions;

// export default dataSlice.reducer;

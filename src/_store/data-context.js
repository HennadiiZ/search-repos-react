import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = React.createContext({
  repos: [],
  totalRepos: 0,
  loading: false,
  findRepo: (query) => {},
});

export const DataContextProvider = (props) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filteredData, setFilteredData] = useState(repos);

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
    })
    .catch((error) => {
      console.error('There was a problem with the axios operation:', error);
    });

  }, []);

  const findRepoHandler = (query) => {
    // console.log(query);
    const filteredData = repos.filter((item) =>
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredData);
  };

  console.log(filteredData);

  const context= {
    repos: repos, 
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
import React, { useState, useEffect } from 'react';

const DataContext = React.createContext({
  repos: [],
  totalRepos: 0,
  loading: false,
  addRepo: (newRepo) => {},
});

export const DataContextProvider = (props) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const URL = 'https://api.github.com/search/repositories?q=';
  const REPOS_AMOUNT = '&per_page=20';
  
  useEffect(() => {  
    setIsLoading(true);  
    // fetchRepos(setRepo, setIsLoading); 
    fetch(`${URL}${'react'}${REPOS_AMOUNT}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // setResults(data.items);
      setRepos(data.items);
      console.log('data.items', data.items)
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }, []);

  const addRepoHandler = (newRepo) => {
    // setRepos([...repos, newRepo]);
  };

  const context= {
    repos: repos, 
    totalRepos: repos.length, 
    loading: isLoading,
    addRepo: addRepoHandler,
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;
import React, { useState, useEffect } from 'react';

const DataContext = React.createContext({
  repos: [],
  totalRepos: 0,
  loading: false,
  addRepo: (newRepo) => {},
});

export const DataContextProvider = (props) => {
  const [repos, setRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {  
    setIsLoading(true);  
    // fetchRepos(setRepo, setIsLoading); 
  }, []);

  const addRepoHandler = (newRepo) => {
    setRepo([...repos, newRepo]);
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
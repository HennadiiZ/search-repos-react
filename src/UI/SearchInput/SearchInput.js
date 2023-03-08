import classes from './SearchInput.module.css';
import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import DataContext from '../../_store/data-context'; 

const SearchInput = (props) => {
  const contentInputRef = useRef(null);  
  const [query, setQuery] = useState('');
  const reposCtx = useContext(DataContext);

  const submitHandler = (e) => {
    e.preventDefault();
    // props.onSearch(query);
    // console.log(query);
    reposCtx.findRepo(query);
  };

  return (
    <form className={classes.form} onBlur={submitHandler}>
      <input 
        id='text' 
        type='text' 
        placeholder='Search' 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        ref={contentInputRef}
      />
    </form>
  );
};
  
export default SearchInput;
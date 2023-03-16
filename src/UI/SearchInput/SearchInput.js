import classes from './SearchInput.module.css';
import React, { useState } from 'react';

const SearchInput = (props) => {
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('query', query);
    props.onSearch(query);
  };

  return (
    // <form className={classes.form} onBlur={submitHandler}>
    //   <input 
    //     id='text' 
    //     type='text' 
    //     placeholder='Search' 
    //     value={query}
    //     onChange={(event) => setQuery(event.target.value)}
    //     ref={contentInputRef}
    //   />
    // </form>
    <form className={classes.form} onBlur={submitHandler}>
      <input 
        id='text' 
        type='text' 
        placeholder='Search' 
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
};
  
export default SearchInput;
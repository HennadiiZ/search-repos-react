import classes from './SearchInput.module.css';
import React, { useRef } from 'react';

const SearchInput = (props) => {
  const contentInputRef = useRef(null);  

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input id='text' type='text' placeholder='Search' ref={contentInputRef}/>
    </form>
  );
};
  
export default SearchInput;
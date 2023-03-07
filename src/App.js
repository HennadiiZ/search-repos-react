import './App.css';
import React, { useRef } from 'react';

function App() {

  const DUMMY_REPOS = [
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      key: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      key: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      key: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
  ];

  const contentInputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <form className='form' onSubmit={submitHandler}>
        <input id='text' type='text' placeholder='Search' ref={contentInputRef}/>
      </form>

      <ul className='repos'>
        {
          DUMMY_REPOS.map(item => ( 
            <li className='repos_item' key={item.key}>
              <div className='left-side'>

                <div className='pic-wrapper'>
                  <img src={item.pic} alt='pic'/>
                </div>

                <div className='info-wrapper'>
                  <h3>{item.name}</h3>
                  <p>{item.author}</p>
                  <p>{item.language}</p>
                  <div>{item.description}</div>
                </div>

              </div>
              <div className='right-side'>
  
                <div className='numbers-wrapper'>
                  <p>{item.stars} <span>stars</span></p>
                  <p>{item.watchers} watchers</p>
                </div>

              </div>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;

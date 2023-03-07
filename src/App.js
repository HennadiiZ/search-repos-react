import './App.css';
import ReposList from './components/ReposList/ReposList';
import SearchInput from './UI/SearchInput/SearchInput';

function App() {

  const DUMMY_REPOS = [
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      id: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      id: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Repo name', 
      author: 'author', 
      language: 'language', 
      description: 'description', 
      stars: 146, 
      watchers: 146,
      id: Math.random(),
      pic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
  ];


  return (
    <div className="app">
      <SearchInput />
      <ReposList  repos={DUMMY_REPOS} />
    </div>
  );
}

export default App;

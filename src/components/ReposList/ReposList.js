import classes from './ReposList.module.css';
import RepoItem from '../RepoItem/RepoItem';

const ReposList = (props) => {
  return (
    <ul className={classes.repos}>
      {
        props.repos.map(item => ( 
          <RepoItem 
            key={Math.random()}
            id={item.id}
            name={item.name}
            author={item.author}
            language={item.language}
            descriptione={item.description}
            stars={item.stars}
            watchers={item.watchers}
            pic={item.pic}
          />
        ))
      }
    </ul>
  );
};
  
export default ReposList;
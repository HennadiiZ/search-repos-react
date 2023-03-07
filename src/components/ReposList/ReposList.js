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
            author={item.owner.login}
            language={item.language}
            description={item.description}
            stars={item.stargazers_count}
            watchers={item.watchers}
            pic={item.owner.avatar_url}
          />
        ))
      }
    </ul>
  );
};
  
export default ReposList;
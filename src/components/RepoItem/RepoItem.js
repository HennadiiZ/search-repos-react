import classes from './RepoItem.module.css';

const RepoItem = (props) => {
  return (
    <li className={classes.repos_item}>
      <div className={classes.left_side}>
        <div className={classes.pic_wrapper}>
          <img src={props.pic} alt='pic'/>
        </div>
        <div className={classes.info_wrapper}>
          <h3>{props.name}</h3>
          <p>{props.author}</p>
          <p>{props.language}</p>
          <div>{props.description}</div>
        </div>
      </div>
      <div className={classes.right_side}>
        <div className={classes.numbers_wrapper}>
          <p>{props.stars} <span>stars</span></p>
          <p>{props.watchers} watchers</p>
        </div>
      </div>
    </li> 
  );
};
  
export default RepoItem;
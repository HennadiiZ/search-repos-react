import classes from './ReposList.module.css';
import RepoItem from '../CityItem/CityItem';

const ReposList = (props) => {
  return (
    <ul className={classes.list}>
        { 
          props.cities.map(item =>(
          <RepoItem 
            key={item.id}
            id={item.id}
            name={item.name}
            weather={item.weather}
            main={item.main}
            timezone={item.timezone}
            dt={item.dt}
          />
         ))
        }
    </ul>
  );
};
  
export default ReposList;
import classes from './UsersComponent.module.css';
import UsersContainer from './Users/UsersContainer';


const UsersComponent = () => {
    return (
        <div className={classes.flexContainer}>
            <UsersContainer />
        </div>
    );
}

export default UsersComponent;
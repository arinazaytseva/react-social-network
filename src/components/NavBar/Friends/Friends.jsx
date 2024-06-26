import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friendsElements = (props.friends).map(friend => <Friend key={friend.id} name={friend.name} />)

    return (
        <div className={classes.friends}>
            {friendsElements}
        </div>
    );
}

export default Friends;
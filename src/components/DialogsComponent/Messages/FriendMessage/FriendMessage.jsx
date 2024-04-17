import classes from "./FriendMessage.module.css";


const FriendMessage = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.item__text}>
                {props.text}
            </div>
        </div>
    );
}

export default FriendMessage;
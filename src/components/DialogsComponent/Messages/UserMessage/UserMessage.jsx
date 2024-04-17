import classes from "./UserMessage.module.css";


const UserMessage = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.item__text}>
                {props.text}
            </div>
        </div>
    );
}

export default UserMessage;
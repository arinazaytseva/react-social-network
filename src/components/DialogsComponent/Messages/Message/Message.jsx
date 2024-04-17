import classes from "./Message.module.css";


const Message = (props) => {
    return (
        <div className={classes.item}>
            {props.text}
        </div>
    );
}

export default Message;
import classes from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.item__text}>{props.text}</div>
        </div>
    );
}

export default Post;
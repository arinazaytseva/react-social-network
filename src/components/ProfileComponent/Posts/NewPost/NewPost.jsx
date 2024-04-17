import React from 'react';
import classes from './NewPost.module.css';


const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onChangePostText = () => {
        let text = newPostElement.current.value;
        props.onChangePostText(text);
    }

    return (
        <div className={classes.newPost}>
            <textarea 
                onChange={onChangePostText} ref={newPostElement} 
                className={classes.newPost__text} value={props.newPostText} />
            <button onClick={addPost} className={classes.newPost__button}>
                Add post
            </button>
        </div>
    );
}

export default NewPost;
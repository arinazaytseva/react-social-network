import React from 'react';
import classes from './NewMessage.module.css';


const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onChangeMessageText = () => {
        let text = newMessageElement.current.value;
        props.onChangeMessageText(text);
    }

    return (
        <div className={classes.newMessage}>
            <textarea onChange={onChangeMessageText} ref={newMessageElement} className={classes.newMessage__text} value={props.newMessageText} />
            <button onClick={addMessage} className={classes.newMessage__button}>
                Send message
            </button>
        </div>
    );
}

export default NewMessage;
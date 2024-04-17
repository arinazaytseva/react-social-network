import classes from "./Messages.module.css";
import UserMessage from "./UserMessage/UserMessage";
import FriendMessage from "./FriendMessage/FriendMessage";
import NewMessageComponent from "./NewMessageComponent/NewMessageComponent";


const Messages = (props) => {
    let messagesElements = (props.messages).map(message => {
        if (message.sender === 'me') {
            return <UserMessage key={message.id} text={message.text} />;
        };
        if (message.sender === 'friend') {
            return <FriendMessage key={message.id} text={message.text} />;
        };
    })
    return (
        <div className={classes.messages}>
            {messagesElements}
            <NewMessageComponent />
        </div>
    );
    // # Передача store или элементов store с помощью контекста
    // return (
    //     <StoreContext.Consumer>
    //         {
    //             (store) => {
    //                 let messagesElements = (store.getState().dialogsPage.messages).map(message => {
    //                     if (message.sender === 'me') {
    //                         return <UserMessage key={message.id} text={message.text} />;
    //                     };
    //                     if (message.sender === 'friend') {
    //                         return <FriendMessage key={message.id} text={message.text} />;
    //                     };
    //                 })
    //                 return (
    //                     <div className={classes.messages}>
    //                         {messagesElements}
    //                         <NewMessageContainer />
    //                     </div>
    //                 );
    //             }
    //         }
    //     </StoreContext.Consumer>
    // );
}

export default Messages;
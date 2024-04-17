import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/dialogsReducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        onChangeMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

// const NewMessageContainer = (props) => {
    // # Передача store или элементов store с помощью props
    // let addMessage = () => {
    //     let action = addMessageActionCreator();
    //     props.dispatch(action);
    // };
    // let onChangeMessageText = (text) => {
    //     let action = updateNewMessageTextActionCreator(text);
    //     props.dispatch(action);
    // };
    // return (
    //     <NewMessage newMessageText={props.state.newMessageText} addMessage={addMessage} onChangeMessageText={onChangeMessageText} />
    // );
// }
// # Передача store или элементов store с помощью контекста
// const NewMessageContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let addMessage = () => {
//                         let action = addMessageActionCreator();
//                         store.dispatch(action);
//                     };
//                     let onChangeMessageText = (text) => {
//                         let action = updateNewMessageTextActionCreator(text);
//                         store.dispatch(action);
//                     };
//                     return (
//                         <NewMessage newMessageText={store.getState().profilePage.newMessageText} addMessage={addMessage} onChangeMessageText={onChangeMessageText} />
//                     );
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }
// # Передача store или элементов store с помощью библиотеки React Redux (connect())
// const mapStateToProps = (state) => {
//     return {
//         newMessageText: state.dialogsPage.newMessageText
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             let action = addMessageActionCreator();
//             dispatch(action);
//         },
//         onChangeMessageText: (text) => {
//             let action = updateNewMessageTextActionCreator(text);
//             dispatch(action);
//         }
//     }
// }
// const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {
    let dialogsElements = (props.dialogs).map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    return (
        <div className={classes.dialogs}>
            {dialogsElements}
        </div>
    );
    // # Передача store или элементов store с помощью контекста
    // return (
    //     <StoreContext.Consumer>
    //         {
    //             (store) => {
    //                 let dialogsElements = (store.getState().dialogsPage.dialogs).map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    //                 return (
    //                     <div className={classes.dialogs}>
    //                         {dialogsElements}
    //                     </div>
    //                 );
    //             }
    //         }
    //     </StoreContext.Consumer>
    // );
}

export default Dialogs;
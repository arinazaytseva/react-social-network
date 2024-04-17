import classes from "./DialogsComponent.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";


const DialogsComponent = (props) => {
    return (
        <div className={classes.flexContainer}>
            <DialogsContainer />
            <MessagesContainer />
        </div>
    );
}

export default DialogsComponent;
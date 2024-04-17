import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    };
}

const DialogsContainer = connect(mapStateToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;
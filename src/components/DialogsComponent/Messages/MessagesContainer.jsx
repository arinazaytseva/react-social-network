import { connect } from "react-redux";
import Messages from './Messages';


const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    };
}

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
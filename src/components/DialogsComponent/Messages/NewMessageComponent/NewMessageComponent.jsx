import { reduxForm, Field } from "redux-form";
import { addMessageAC } from "../../../../redux/dialogsReducer";
import { connect } from "react-redux";
import { required, maxLengthCreator } from "../../../../utils/validators";
import { RenderField } from '../../../RenderField/RenderField';


const maxLength20 = maxLengthCreator(20);

const NewMessageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field 
                    component={RenderField} 
                    name="newMessegeText" 
                    type="input" 
                    placeholder="New message text" 
                    validate={[ maxLength20 ]} />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    );
};

const NewMessageReduxForm = reduxForm({
    form: 'newMessage'
})(NewMessageForm);

const NewMessageComponent = (props) => {
    const onSubmit = (values) => {
        props.addMessage(values.newMessegeText);
    };
    return (
        <div>
            <NewMessageReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            let action = addMessageAC(newMessageText);
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageComponent);
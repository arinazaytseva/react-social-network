import { reduxForm, Field } from "redux-form";
import { addPostAC } from "../../../../redux/profileReducer";
import { connect } from "react-redux";
import { required, maxLengthCreator } from './../../../../utils/validators';
import { RenderField } from '../../../RenderField/RenderField';
// import { Input } from '../../../RenderField/RenderField';


const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field 
                    component={RenderField} 
                    name='newPostText' 
                    type='text' 
                    placeholder="New post text"
                    validate={[ maxLength10 ]} />
            </div>
            <div>
                <button type="submit">Post</button>
            </div>
        </form>
    );
};

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(NewPostForm);

const NewPostComponent = (props) => {
    const onSubmit = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div>
            <NewPostReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            let action = addPostAC(newPostText);
            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(NewPostComponent);
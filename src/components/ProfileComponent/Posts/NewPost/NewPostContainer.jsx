import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profileReducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action)
        },
        onChangePostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
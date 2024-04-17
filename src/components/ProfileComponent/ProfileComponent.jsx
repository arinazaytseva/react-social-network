import classes from "./ProfileComponent.module.css";
import Profile from "./Profile/Profile";
import PostsContainer from './Posts/PostsContainer';


const ProfileComponent = (props) => {
    return (
        <div className={classes.flexContainer}>
            <Profile profile={props.profile} status={props.status} setStatus={props.setStatus} />
            <PostsContainer />
        </div>
    );
}

export default ProfileComponent;
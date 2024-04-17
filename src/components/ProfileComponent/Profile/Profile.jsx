import classes from './Profile.module.css';
import profilePhoto from '../../../assets/images/user.png';
// import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';


const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.picture}>
                {/* <img src={(!props.profile.photos.large) ? profilePhoto : props.profile.photos.large} /> */}
                <img src={(!props.profile.photos.large) ? profilePhoto : props.profile.photos.large} />
            </div>
            <div className={classes.description}>
                <div className={`${classes.item} ${classes.description__fullName}`}>{props.profile.fullName}</div>
                {
                    props.profile.lookingForAJob 
                    ? <div className={`${classes.item} ${classes.description__jobStatus}`}>Работа: {props.profile.lookingForAJobDescription}</div> 
                    : <div className={`${classes.item} ${classes.description__jobStatus}`}>Не ищу работу.</div>
                }
                <ProfileStatusWithHooks status={props.status} setStatus={props.setStatus} />
                {/* <div className={`${classes.item} ${classes.description__dob}`}>DOB: 25.03.2003.</div>
                <div className={`${classes.item} ${classes.description__city}`}>City: Moscow.</div> */}
            </div>
        </div>
    );
}

export default Profile;
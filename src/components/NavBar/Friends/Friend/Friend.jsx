import classes from "./Friend.module.css";
import imagePhoto from '../../../../assets/images/friend.jpg';


const Friend = (props) => {
    return (
        <div className={classes.item}>
            <img src={imagePhoto} className={classes.item__img} />
            <div className={classes.item__name}>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";


const Dialog = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={`/dialogs/${props.id}`} className={classes.item__link}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;
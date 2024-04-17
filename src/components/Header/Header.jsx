import { NavLink, Navigate } from "react-router-dom";
import classes from "./Header.module.css"
import { connect } from "react-redux";


const Header = (props) => {
    const logout = () => {
        props.logout();
        return <Navigate to='/login' />;
    };
    
    return (
        <div className={classes.header}>
            <div className={classes.webLogo}></div>
            <div className={classes.webName}></div>
            {
                props.isAuth
                ? (
                    <div className={classes.loginBlock}>
                        Your login: {props.login}.
                        <button onClick={() => logout()} className={classes.buttonLogout}>Logout</button>
                    </div>
                )
                : (
                    <div className={classes.loginBlock}>
                        <NavLink to='/login' className={classes.loginLink}>Login</NavLink>
                    </div>
                )
            }
        </div>
    );
};

export default Header;
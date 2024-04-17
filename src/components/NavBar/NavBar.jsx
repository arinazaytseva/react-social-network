import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const NavBar = (props) => {
    return (
        <div className={classes.navBar}>
            <div className='item'>
                <NavLink to='/profile' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
                    Profile
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to='/dialogs' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
                    Messages
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to='/users' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
                    Users
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to='/news' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
                    News
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to='/music' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
                    Music
                </NavLink>
            </div>
            <div className='item'>
                <NavLink to='/settings' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
                    Settings
                </NavLink>
            </div>
            <FriendsContainer />
        </div>
    );
}
    // return (
    //     <StoreContext.Consumer>
    //         {
    //             (store) => {
    //                 return (
    //                     <div className={classes.navBar}>
    //                         <div className='item'>
    //                             <NavLink to='/profile' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
    //                                 Profile
    //                             </NavLink>
    //                         </div>
    //                         <div className='item'>
    //                             <NavLink to='/dialogs' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
    //                                 Messages
    //                             </NavLink>
    //                         </div>
    //                         <div className='item'>
    //                             <NavLink to='/news' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
    //                                 News
    //                             </NavLink>
    //                         </div>
    //                         <div className='item'>
    //                             <NavLink to='/music' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
    //                                 Music
    //                             </NavLink>
    //                         </div>
    //                         <div className='item'>
    //                             <NavLink to='/settings' className={itemLink => itemLink.isActive ? classes.active: classes.item__link}>
    //                                 Settings
    //                             </NavLink>
    //                         </div>
    //                         <Friends friends={store.getState().navBarElement.friends} />
    //                     </div>
    //                 );
    //             }
    //         }
    //     </StoreContext.Consumer>
    // );

export default NavBar;
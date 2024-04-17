import classes from './Users.module.css';
import userPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }

    return (
        <div className={classes.users}>
            <div className={classes.pages}>
                {
                    pages.map(page => {
                        return (
                            <div
                                key={page}
                                onClick={() => {props.onPageSelected(page)}}
                                className={(page === props.currentPage ? classes.selectedPage : classes.defaultPage)}>
                                {page}
                            </div>
                        );
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={classes.user}>
                            <div className={classes.user__information}>
                                <div className={classes.user__photo}>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                                    </NavLink>
                                </div>
                                <div className={classes.user__personal}>
                                    {/* <div className={classes.user__fullname}>{user.name} {user.lastname}</div> */}
                                    <div className={classes.user__fullname}>{user.name}</div>
                                    <div className={classes.user__status}>{user.status}</div>
                                </div>
                                <div className={classes.user__location}>
                                    <div className={classes.user__country}>{/*{user.location.country}*/}</div>
                                    <div className={classes.user__city}>{/*{user.location.city}*/}</div>
                                </div>
                            </div>
                            <div className={classes.user__following}>
                                {
                                    user.followed 
                                        ? <button disabled={
                                            props.followingInProgress.some(userId => userId == user.id)
                                        } onClick={() => {props.unfollow(user.id)}} className={classes.user__button}>Unfollow</button>
                                        : <button disabled={
                                            props.followingInProgress.some(userId => userId == user.id)
                                        } onClick={() => {props.follow(user.id)}} className={classes.user__button}>Follow</button>
                                }
                            </div> 
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Users;
import { followAPI, usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 150,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {...state};
            stateCopy.users = state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true};
                };
                return user;
            });
            return stateCopy;
        }
        case UNFOLLOW: {  
            let stateCopy = {...state};
            stateCopy.users = state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: false};
                };
                return user;
            });
            return stateCopy;
        };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        };
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        };
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        };
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        };
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(userId => userId !== action.userId)
            };
        };
        default:
            return state;
    };
};

export const followAC = (id) => ({ type: FOLLOW, userId: id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgressAC = (isFollowingInProgress, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId });

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.get(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            // this.props.setTotalUsersCount(response.data.totalCount);
        });
    };
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId));
        followAPI.post(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId));
                dispatch(toggleFollowingInProgressAC(false, userId));
            };
        });
    };
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId));
        followAPI.delete(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId));
                dispatch(toggleFollowingInProgressAC(false, userId));
            };
        });
    };
};

export default usersReducer;
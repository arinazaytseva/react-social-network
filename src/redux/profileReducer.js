import { profileAPI } from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Сейчас я занимаюсь тем, что разрабатываю социальную сеть для того, чтобы изучить модуль/библиотеку React.'},
        {id: 2, text: 'Привет! Я занимаюсь разработкой проекта Finmanager. Данный проект помогает рационально расходовать и, соответственно, копить денежные средства.'},
    ],
    profile: null,
    isFetching: false,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                text: action.newPostText
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts, newPost];
            return stateCopy;
        };
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        };
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        };
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        };
        default:
            return state;
    };
};

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfileAC = (profile) => ({ type: SET_PROFILE, profile });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setStatusAC = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.get(userId).then(data => {
            dispatch(setProfileAC(data));
        });
    };
};

export const setStatus = (status) => {
    return (dispatch) => {
        profileAPI.putStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            };
        });
    };
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response));
        });
    };
};

export default profileReducer;
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { getProfile } from "./profileReducer";


const SET_USER_DATA = 'SET-USER-DATA';
const LOGOUT = 'LOGOUT';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.data.userId,
                login: action.data.login,
                email: action.data.email,
                isAuth: true
            };
        };
        case LOGOUT: {
            return {
                ...state,
                userId: null,
                login: null,
                email: null,
                isAuth: false
            };
        };
        default:
            return state;
    };
};

export const setUserDataAC = ({userId, login, email}) => ({ type: SET_USER_DATA, data: {userId, login, email} });
const logoutAC = () => ({ type: LOGOUT });

export const getUserData = () => {
    return (dispatch) => {
        return authAPI.get().then(data => {
            let userData = {
                userId: data.data.id,
                login: data.data.login,
                email: data.data.email
            };
            dispatch(setUserDataAC(userData));
        });
    };
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.postLogin(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getUserData());
            }
            else {
                let action = stopSubmit('login', {'_error': data.messages[0]});
                dispatch(action);
            };
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        authAPI.deleteLogin().then(data => {
            if (data.resultCode === 0) {
                dispatch(logoutAC());
            }
        });
    };
};

export default authReducer;
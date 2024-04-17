import { initialize } from "redux-form";
import { getUserData } from "./authReducer";

const INITIALIZE = 'INITIALIZE';

const intialState = {
    initialized: false
};

const appReducer = (state = intialState, action) => {
    switch(action.type) {
        case INITIALIZE: {
            return {
                initialized: true
            };
        };
        default:
            return state;
    };
};

const initializationAC = () => ({ type: INITIALIZE });

export const initialization = () => {
    return (dispatch) => {
        let promise = dispatch(getUserData());
        promise.then(() => {
            dispatch(initializationAC());
        });
    };
};

export default appReducer;
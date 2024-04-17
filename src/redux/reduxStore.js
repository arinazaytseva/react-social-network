import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import { thunk } from 'redux-thunk';
import { reducer } from 'redux-form';
import appReducer from './appReducer';


let rootReducer = combineReducers({
    navBarElement: navBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: reducer,
    app: appReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
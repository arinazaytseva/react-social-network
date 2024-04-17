import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getUserData } from '../../redux/authReducer';
import { logout } from '../../redux/authReducer';


class HeaderAPIComponent extends React.Component {
    render() {
        return (
            <Header 
                isAuth={this.props.isAuth} 
                login={this.props.login} 
                auth={this.props.auth}
                logout={this.props.logout} />
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: () => {
            dispatch(getUserData());
        },
        logout: () => {
            dispatch(logout());
        }
    };
};

let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent);

export default HeaderContainer;
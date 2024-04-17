import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToPropsForAuthRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component { // Создание компоненты
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/login' />
            };
            return (
                <Component {...this.props} />
            );
        };
    };

    const ConnectedRedirectComponent = connect(mapStateToPropsForAuthRedirect)(RedirectComponent); // Создание оболочки компоненты

    return ConnectedRedirectComponent;
};

export default withAuthRedirect;
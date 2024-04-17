import { connect } from 'react-redux';
import React from 'react';
import ProfileComponent from './ProfileComponent';
import { toggleIsFetchingAC, getProfile, setStatus, getStatus } from '../../redux/profileReducer';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId;
        !this.props.router.params.userId 
        ? (this.props.userId && (userId = this.props.userId)) 
        : (userId = this.props.router.params.userId);
        if (userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        };
    };
    render() {
        if (!this.props.profile) {
            // return <Navigate to='/login' />
            <div>Привет!</div>
        }
        else {
            return <ProfileComponent profile={this.props.profile} 
                                     status={this.props.status}
                                     setStatus={this.props.setStatus} />;
        }
    };
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action);
        },
        getProfile: (userId) => {
            dispatch(getProfile(userId));
        },
        setStatus: (statusText) => {
            dispatch(setStatus(statusText));
        },
        getStatus: (userId) => {
            dispatch(getStatus(userId));
        },
    };
};

let withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }} />
        );
    };

    return ComponentWithRouterProp;
};

const ProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPIComponent);

export default ProfileContainer;
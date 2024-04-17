import { connect } from 'react-redux';
import { requestUsers, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, follow, unfollow } from '../../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers  } from '../../../redux/selectors/usersSelectors';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageSelected = (page) => {
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader /> : <Users 
                                                                totalUsersCount={this.props.totalUsersCount}
                                                                pageSize={this.props.pageSize}
                                                                onPageSelected={this.onPageSelected}
                                                                currentPage={this.props.currentPage}
                                                                users={this.props.users}
                                                                unfollow={this.props.unfollow}
                                                                follow={this.props.follow}
                                                                followingInProgress={this.props.followingInProgress} />
                }
            </>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage);
            dispatch(action);
        },
        setTotalUsersCount: (totalUsersCount) => {
            let action = setTotalUsersCountAC(totalUsersCount);
            dispatch(action);
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action);
        },
        requestUsers: (currentPage, pageSize) => {
            dispatch(requestUsers(currentPage, pageSize));
        },
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        }
    };
}

const UsersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersAPIComponent);

export default UsersContainer;
import React from 'react';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {
    followSuccess,
    getUsersThunkCreator,
    InitialStateType,
    setCurrentPage,
    toggleFollowingProgress,
    unFollowSuccess,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";


export type UsersAPIComponentPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    //setUsers: (users: UserType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    //toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void // Обновленная сигнатура
    followingInProgress: number[]
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    // onPageChanged: (pageNumber: number) => void
}

class UsersContainer extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}


let mapStateToProps = (state: StateType): InitialStateType => {
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            follow: followSuccess, unFollow: unFollowSuccess, setCurrentPage,
            toggleFollowingProgress, getUsersThunkCreator
        }),
)(UsersContainer)
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";


export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    // setUsers: (users: Array<UsersType>) => void
    // setTotalUserCount: (totalUsersCount: number) => void
    // setIsFetching: (isFetching: boolean) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean,id:number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    getUsers: (page:number, pageSize:number) => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

class UsersConteiner extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: AppReduxStoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {follow, unFollow, setCurrentPage,
            toggleIsFollowingProgress,getUsers})
)(UsersConteiner)

// export const UsersContainer = withAuthRedirect(connect(mapStateToProps,
//     {follow, unFollow, setCurrentPage, toggleIsFollowingProgress,getUsers
//     })(UsersConteiner))
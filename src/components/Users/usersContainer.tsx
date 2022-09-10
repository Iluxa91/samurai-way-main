import {connect} from "react-redux";
import {AppReduxStoreType} from "../../redux/store-redux";
import {
    follow,
    getFilteredUsersReselect,
    getFilterSelector,
    getUsers,
    setCurrentPage,
    setFilter,
    toggleIsFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
} from "../../redux/users-selectors";

export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean,id:number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    getUsers: (page:number, pageSize:number) => void
    setFilter: (filter:string) => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

class UsersConteiner extends React.Component<UserPropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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
                   setFilter={this.props.setFilter}
                   filter={this.props.filter}
            />
        </>
    }
}

let mapStateToProps = (state: AppReduxStoreType) => {
    return {
        filter: getFilterSelector(state.usersPage),
        users: getFilteredUsersReselect(state.usersPage),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {follow, unFollow, setCurrentPage,
            toggleIsFollowingProgress,getUsers,setFilter})
)(UsersConteiner)

// export const UsersContainer = withAuthRedirect(connect(mapStateToProps,
//     {follow, unFollow, setCurrentPage, toggleIsFollowingProgress,getUsers
//     })(UsersConteiner))
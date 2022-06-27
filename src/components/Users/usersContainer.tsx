import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unFollow
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {AppPropsType} from "../../App";


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
        // this.props.setIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUserCount(data.totalCount)
        //     })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setIsFetching(true)
        // this.props.setCurrentPage(pageNumber);
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
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

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUserCount: (totalUsersCount: number) => {
//             dispatch(setTotalUserCountAC(totalUsersCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, toggleIsFollowingProgress,getUsers
    })(UsersConteiner)
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUserCount,
    setUsers,
    unFollow,
    UsersType
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType =  {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

class UsersConteiner extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <> {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.follow}
                   follow={this.props.unFollow}
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
        isFetching: state.usersPage.isFetching
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
    {follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching}
    )(UsersConteiner)
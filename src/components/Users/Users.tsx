import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";
import s from "./Users.module.css"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    followingInProgress: number[]
}
export const Users = (props: PropsType) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div>
                {props.users.map(u => <User key={u.id}
                                            followingInProgress={props.followingInProgress}
                                            follow={props.follow}
                                            unFollow={props.unFollow}
                                            user={u}/>)}
            </div>
        </div>
    );
};



import React, {ChangeEvent, useState} from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    followingInProgress: number[]
    setFilter: (filter: string) => void
    filter: string
}
export const Users = (props: PropsType) => {

    const [search, setSearch] = useState<string>(props.filter)
    let filterTimeoutId: NodeJS.Timeout
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setSearch(value)
        clearTimeout(filterTimeoutId)
        filterTimeoutId = setTimeout(() => {
            props.setFilter(value)
        }, 600)
    }

    return (
        <div>
            <div>
                <input placeholder={"search"} value={search} onChange={onSearchChange}/>
            </div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       portionSize={10}/>
            <div>
                {props.users.length ?
                    props.users.map(u => <User key={u.id}
                                               followingInProgress={props.followingInProgress}
                                               follow={props.follow}
                                               unFollow={props.unFollow}
                                               user={u}/>)
                    : "Users not found"
                }
            </div>
        </div>
    );
};



import React from "react";
import s from "./User.module.css"
import userPhoto from "../../assets/image/146031.png"
import {NavLink} from "react-router-dom";
import {UsersType} from "../../redux/users-reducer";

type PropsType = {
    followingInProgress: number[]
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    user: UsersType
}
export const User = (props: PropsType) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                         className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unFollow(props.user.id)
                            }}>Unfollow </button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.follow(props.user.id)
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    );
};


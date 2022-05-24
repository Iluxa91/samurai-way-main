import React from 'react';
import {UsersType} from "../../Redux/users-reducer";
import s from './users.module.css'
import {UserPropsType} from "./usersContainer";

export const Users = (props:UserPropsType) => {
    if (props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
                followed: true, fullName: 'Sveta', status: 'junior', location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 1,
                photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
                followed: false, fullName: 'Natalia', status: 'middle', location: {city: 'Tbilisi', country: 'Georgia'}
            },
            {
                id: 1,
                photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
                followed: true, fullName: 'Edvard', status: 'senior', location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }
    return (
        <div>
            {props.users.map(u =>
            <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow </button>
                        :<button onClick={()=>{props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
            }
        </div>
    );
};

import React from 'react';
// import s from './Users.module.css'
// import {UserPropsType} from "./usersContainer";
// import axios from 'axios'
// import userPhoto from '../../assets/image/146031.png'
//
// export const Users = (props:UserPropsType) => {
//     let getUsers = () => {
//         if (props.users.length===0){
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
//                 props.setUsers(response.data.items)
//             })
//     }
//
//         // props.setUsers([
//         //     {
//         //         id: 1,
//         //         photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
//         //         followed: true, fullName: 'Sveta', status: 'junior', location: {city: 'Minsk', country: 'Belarus'}
//         //     },
//         //     {
//         //         id: 1,
//         //         photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
//         //         followed: false, fullName: 'Natalia', status: 'middle', location: {city: 'Tbilisi', country: 'Georgia'}
//         //     },
//         //     {
//         //         id: 1,
//         //         photoUrl: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
//         //         followed: true, fullName: 'Edvard', status: 'senior', location: {city: 'Kiev', country: 'Ukraine'}
//         //     }
//         // ])
//     }
//     return (
//         <div>
//             <button onClick={getUsers}>get users</button>
//             {props.users.map(u =>
//             <div key={u.id}>
//             <span>
//                 <div>
//                     <img src={u.photos.small != null? u.photos.small : userPhoto} className={s.userPhoto}/>
//                 </div>
//                 <div>
//                     {u.followed
//                         ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow </button>
//                         :<button onClick={()=>{props.follow(u.id)}}>Follow</button>
//                     }
//                 </div>
//             </span>
//                 <span>
//                 <span>
//                     <div>{u.name}</div>
//                     <div>{u.status}</div>
//                 </span>
//                 <span>
//                     <div>{'u.location.country'}</div>
//                     <div>{'u.location.city'}</div>
//                 </span>
//             </span>
//             </div>)
//             }
//         </div>
//     );
// };

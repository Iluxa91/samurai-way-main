import {connect} from "react-redux";
import {AppReduxStoreType} from "../../Redux/store-redux";
import {Dispatch} from "redux";
import {followAC, setUsers, unFollowAC, UsersType} from "../../Redux/users-reducer";
import Users from "./UsersС";

export type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    follow:(userID: number)=>void
    unfollow:(userID: number)=>void
    setUsers:(users:Array<UsersType>)=>void
}
type MapStateToPropsType = {
    users:Array<UsersType>
}
let mapStateToProps = (state:AppReduxStoreType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
return{
    follow: (userID: number)=>{
        dispatch(followAC(userID))
    },
    unfollow:(userID: number)=>{
        dispatch(unFollowAC(userID))
    },
    setUsers: (users: UsersType[])=>{
        dispatch(setUsers(users))
    }
}
}

export const UsersContainer = connect (mapStateToProps,mapDispatchToProps)(Users)